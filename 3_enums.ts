export {};

enum Membership {
  Simple, //0
  Standart, //1
  Premium, //2
}

const membership = Membership.Standart;
const membershipRevers = Membership[2];
console.log(membership);
console.log(membershipRevers);

enum SocialMedium {
  VK = "Vkontakte",
  FACEBOOK = "FACEBOOK",
  INSTAGRAM = "INSTAGRAM",
}

const social = SocialMedium.INSTAGRAM;
console.log(social);
