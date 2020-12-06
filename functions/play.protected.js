exports.handler = function(context, event, callback) {
  let twiml = new Twilio.twiml.VoiceResponse();
  twiml.play({}, `https://${context.DOMAIN_NAME}/MusMus-JGL-021.mp3`);
  callback(null, twiml);
};
