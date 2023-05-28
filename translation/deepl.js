const translate = require("deepl");
const _ = require("lodash");
const qs = require("qs");
const fs = require("fs");

const originalJson = {
  ABOUTUS_TITLE: "ABOUT US",
  ABOUT_DESCRIPTION:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
  OUR_VISION_TITLE: "OUR VISION",
  OUR_VISION_DESC_1:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  OUR_VISION_DESC_2:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  OUR_BELIEF_TITLE: "OUR BELIEF - SPACE IS FOR EVERYONE",
  OUR_BELIEF_DESC_1:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  OUR_BELIEF_DESC_2:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  OUR_BELIEF_DESC_3:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  HOME_BANNER_TITLE: "Trade worry free with",
  CHAINPALS: "ChainPals",
  HOME_BANNER_DESCRIPTION:
    "We provide escrow service for your crypto transaction, with milestone based payment and with trust of smart contracts over multiple chains.",
  BANNER_SUBSCRIBE_TITLE: "Be the first to get notified",
  BANNER_SUBSCRIBE_DESCRIPTION:
    "Being an early subscriber and community members has its own perks, be early and get chance to participates in upcoming airdrops and news events",
  HOW_IT_WORKS: "How it works?",
  HOW_IT_WORKS_DESCRIPTION:
    "ChainPal appoints escrow manager from NFT Holders to resolve conflict and 0.5% fees is paid to the escrow manager appointed",
  BENEFIT_OF_CHAINPAL_TOKEN: "Benefits of ChainPals Token",
  GOVERNANCE_LABEL: "Governance",
  DISCOUNT_LABEL: "50% Discount on fees",
  TRANSACTION_LABEL: "No fees if transaction done in chainpal tokens",
  REWARD_LABEL: "Get staking rewards distribution of 1% every transaction",
  TOKEN_MECHANISM_LABEL: "Pre-defined token burn mechanism",
  GOVERNANCE_DESC_1:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled GOV",
  GOVERNANCE_DESC_2:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  DESCOUNT_DESC_1:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled DESC",
  DESCOUNT_DESC_2:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  TRANSACTION_DESC_1:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled TRNS",
  TRANSACTION_DESC_2:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  REWARD_DESC_1:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled REWARD",
  REWARD_DESC_2:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  TOKEN_MECHANISM_DESC_1:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled TOKEN",
  TOKEN_MECHANISM_DESC_2:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  JOIN_PARTNER_TITLE: "Join the ChainPals Partner Program",
  JOIN_PARTNER_DESCRIPTION:
    "Become a ChainPal partner and start earning passive income by introducing your audience to safe transaction for crypto payments.",
  JOIN_ESCROW_MANAGER_TITLE: "Join the Escrow Manager Program",
  JOIN_ESCROW_MANAGER_DESCRIPTION:
    "Become a ChainPal Escrow Manager and start earning passive income by hodling EM NFT.",
  ROADMAP_TITLE: "Road Map",
  ROADMAP_TEXT_1:
    "Brainstorm of app and start of Beta version of chainpals.creation of whitepaper, tokenomics and website.",
  ROADMAP_TEXT_2: "Launch of Beta website and launch of pre-sale of the token",
  ROADMAP_TEXT_3:
    "Launch of public sale, staking functionality and 1st token burn.",
  ROADMAP_TEXT_4:
    "Launch of NFT's for appointment of escrow manager. Launch of governance to vote for escrow manager who would be escrow for transaction and earn a part of fees. second token burn",
  ROADMAP_TEXT_5:
    "Launch of multi chain and multi token functionality and third token burn",
  TOKENOMICS_TITLEs: "Tokenomics",
};

const text = Object.keys(originalJson).map((textKey) => {
  return originalJson[textKey];
});

const languages = ["DE", "FR", "ES"];

const translateAsync = languages.map((language) => {
  return translate({
    text,
    target_lang: language,
    auth_key: "6f0cb53e-dd0d-fc61-0298-158446a564fd",
  });
});

Promise.all(translateAsync)
  .then((response) => {
    response.forEach((result) => {
      const translatedTextList = result.data.translations.map((translation) => {
        return translation.text;
      });
      const lang = qs.parse(result.config.data).target_lang;
      console.log(`--------------${lang}--------------`);
      const translatedJsonString = JSON.stringify(
        _.zipObject(Object.keys(originalJson), translatedTextList),
        null,
        2
      );
      console.log(translatedJsonString);
      fs.writeFileSync(`${lang}.json`, translatedJsonString);
      console.log(`------------------------------`);
    });
  })
  .catch((error) => {
    console.log("Error while translating...");
    console.log(error);
  });

// translate({
//   text,
//   target_lang: "DE",
//   auth_key: "6f0cb53e-dd0d-fc61-0298-158446a564fd",
// })
//   .then((result) => {
//     console.log(result.data);
//     const translatedTextList = result.data.translations.map((translation) => {
//       return translation.text;
//     });

//     console.log(
//       JSON.stringify(_.zipObject(Object.keys(originalJson), translatedTextList))
//     );
//   })
//   .catch((error) => {
//     console.error(error);
//   });
