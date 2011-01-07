# Running the user example

To run the user example, first start up the server in one terminal:

    node server.js

Now run the client:

    node client.js

# Regenerating the bindings

If you want to regenerated the bindings, you can run:

    thrift --gen js:node user.thrift
