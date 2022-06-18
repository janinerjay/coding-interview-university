/* Mediator Design Pattern */

// Think of it as a Airport Traffic Controller to each airplane. The ATC controls everything

let Participant = function (name) {
    this.name = name;
    this.chatroom = null;
}

Participant.prototype = {
    send: function (message, to) {
        this.chatroom.send(message, this, to);
    },
    receive: function (message, from) {
        console.log(from.name + " to " + this.name + ": " + message);
    }
}

let Chatroom = function () {
    let participants = {};

    return {
        register: function (participant) {
            participants[participant.name] = participant;
            participant.chatroom = this;
        },
        send: function (message, from, to) {
            if (to) {
                // single direct message
                to.receive(message, from);
            } else {
                // broadcast message
                for (key in participants) {
                    if (participants[key] !== from) {
                        participants[key].receive(message, from);
                    }
                }
            }
        }
    }
}

let beau = new Participant('Beau');
let quincy = new Participant('Quincy');
let rafael = new Participant('Rafael');
let berkeley = new Participant('Berkeley');
let evaristo = new Participant('Evaristo');

let chatroom = new Chatroom();
chatroom.register(beau);
chatroom.register(quincy);
chatroom.register(rafael);
chatroom.register(berkeley);
chatroom.register(evaristo);

quincy.send("How's it going?");
beau.send("The YT channel is up!", quincy);
rafael.send("The FCC wiki is more popular than wikipedia", quincy);
evaristo.send("Janine works at Google now!", quincy);
berkeley.send("the gov forked our repo to create world peace", quincy);