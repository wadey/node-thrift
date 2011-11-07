import os
from os.path import join as pjoin

TIMEOUT = 20000

opts = Variables('build.py')
env = Environment(options=opts, ENV = os.environ.copy(), tools = ['packaging', 'default'])
conf = Configure(env, custom_tests = {})
conf.env['NODE'] = os.environ.get('NODE_BIN_PATH', conf.env.WhereIs('node'))
conf.env['WHISKEY'] = "${NODE} 'node_modules/whiskey/bin/whiskey'"
conf.env['THRIFT'] = os.environ.get('THRIFT_BIN_PATH', conf.env.WhereIs('thrift'))
conf.env['THRIFTCOMPILER'] = "${THRIFT} -o ${GENDIR}"
env = conf.Finish()
Export("env")

cwd = os.getcwd()
rootdir = Dir('#').abspath
chdir = pjoin(rootdir, 'tests')
whiskey_options = ' --real-time' if os.getenv('OUTPUT') == 'yes' else ''
failfast = '' if os.getenv('NOFAILFAST') else ' --failfast'

env["GENDIR"] = pjoin(cwd, 'test', 'generated')

THRIFT_TARGETS = {
  'ThriftTest.thrift': [ 'js:node' ]
}

tests = env.Glob("test/*.js")
test_files = [i.get_path() for i in sorted(tests) if
                     i.get_path().find('disabled') == -1]
test_files = [os.getenv('TEST_FILE')] if os.getenv('TEST_FILE') else test_files

testcmd = env.Command('.complex_tests', [], """
    $WHISKEY --timeout %s \
            ${NOSTYLES} \
            ${DEBUG} \
            ${REALTIME} \
            ${QUIET} \
            ${TIMING} \
            ${COVERAGE_INTEGRATION} \
        --chdir '%s' \
        --sequential \
        --tests '%s'%s %s
"""  % (TIMEOUT, chdir, ' '.join(test_files), whiskey_options, failfast),
    ENV=os.environ)

run = env.Command('.tests_run', '.complex_tests', '')
env.AlwaysBuild(run)
env.Alias('tests', run)

ttasks = []

for file, targets in THRIFT_TARGETS.items():
  for target in targets:
    ttasks.append((target, file))

thriftgen = env.Command(".thriftgen", [], ["$THRIFTCOMPILER --gen " + target + " $GENDIR/" + file
                                            for (target, file) in ttasks])

env.AlwaysBuild(thriftgen)
env.Alias('regen-thrift', thriftgen)

targets = ['regen-thrift', 'tests']
env.Default(targets)
