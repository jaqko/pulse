module.exports = {
	name: 'go-fish',
	description: 'Lets you play Go Fish with the CPU. Also allows multiplayer, up to 4 players.',
	execute(message, args) {
        const player = message.member.user;
        player.setStatus('dnd')
        player.setPresence({game: { 
            name: "Go Fish",
            description: "Butterscotch's very own Go Fish game. Type `c. help` for help!",
            type: 'PLAYING',
            url: ""
        }})
        message.channel.send("Let's do this, "+message.member.user+"?")
        cardAmt = 7;
		function random(max) {
            let max = 13;
            return Math.floor(Math.random() * max + 1);
        }
	},
};