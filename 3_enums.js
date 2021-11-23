"use strict";
exports.__esModule = true;
var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Standart"] = 1] = "Standart";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
var membership = Membership.Standart;
var membershipRevers = Membership[2];
console.log(membership);
console.log(membershipRevers);
var SocialMedium;
(function (SocialMedium) {
    SocialMedium["VK"] = "Vkontakte";
    SocialMedium["FACEBOOK"] = "FACEBOOK";
    SocialMedium["INSTAGRAM"] = "INSTAGRAM";
})(SocialMedium || (SocialMedium = {}));
var social = SocialMedium.INSTAGRAM;
console.log(social);
