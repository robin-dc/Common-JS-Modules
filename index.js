// Your code here
const sayHelloTo = require('./send-messages/say-hello-to')
const giveMessageToMrsPotato = require('./send-messages/give-message-to-mrs-potato')
// const {msg1, msg2, msg3 } = require('./messages/index') - destructured
const index = require('./messages/index')
const msg1 = index.message1
const msg2 = index.message2
const msg3 = index.message3

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

sayHelloTo("Mr. Potato");
giveMessageToMrsPotato(msg1);
giveMessageToMrsPotato(msg2);
giveMessageToMrsPotato(msg3);