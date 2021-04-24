import defaultStat from '@/data/stat.json'
import defaultPart from '@/data/part.json'
import modOptions from '@/data/options.js'
import cardOptions from '@/data/cards.js'

function recursiveFilter(part) {

  var data = {};
  Object.keys(defaultPart).forEach(key => {
    if(part[key]) {
      data[key] = part[key];
    } else {
      data[key] = defaultPart[key]
    }
  });
  if(Array.isArray(data.mod)) {
    data.mod = data.mod.map(mod => {
      if(typeof modOptions[mod] !== 'undefined') {
        return modOptions[mod].name
      } else {
        return ''
      }
    });
  }
  
  if(Array.isArray(data.children)) {
    data.children = data.children.map(child => recursiveFilter(child))
  }
  return data;
}

function deepCopy(ob) {
  return JSON.parse(JSON.stringify(ob));
}

export default function parse(str) {
  var data = Object.assign({}, {
    stat: deepCopy(defaultStat),
    mod: [],
    name: "",
    id: "",
    capaCards: [false, false, false, false, false, false],
    weaponCards: [false, false],
    cards: [],
    extraCards: [],
    capaCardsExcept: [false, false, false, false, false, false],
    weaponCardsExcept: [false, false],
    cardsExcept: [],
    extraCardsExcept: [],
    parts: deepCopy(defaultPart)
  }, deepCopy(JSON.parse(window.atob(str))));
  var statArray = data.stat;
  var stat = {};
  
  Object.keys(defaultStat).forEach((key, index) => {
    if(typeof defaultStat[key] === 'boolean') {
      if(statArray[index] === 1) {
        stat[key] = true;
      } else {
        stat[key] = false;
      }
    } else {
      stat[key] = statArray[index];
    }
  })
  data.stat = stat;
  
  data.capaCards = data.capaCards.map(i => i === 1 ? true : false);
  data.weaponCards = data.weaponCards.map(i => i === 1 ? true : false);
  data.capaCardsExcept = data.capaCardsExcept.map(i => i === 1 ? true : false);
  data.weaponCardsExcept = data.weaponCardsExcept.map(i => i === 1 ? true : false);
  
  if(Object.prototype.hasOwnProperty.call(data, 'cards')) {
    if(Array.isArray(data.cards)) {
      data.cards = data.cards.map(card => cardOptions.filter(c => c.type !== 'extra-move')[card].name);
    }
  }
  if(Object.prototype.hasOwnProperty.call(data, 'extraCards')) {
    if(Array.isArray(data.extraCards)) {
      data.extraCards = data.extraCards.map(card => cardOptions.filter(c => c.type === 'extra-move')[card].name);
    }
  }
  if(Object.prototype.hasOwnProperty.call(data, 'parts')) {
    data.parts = recursiveFilter(data.parts);
  }
   
  if(Object.prototype.hasOwnProperty.call(data, 'mod')) {
    if(Array.isArray(data.mod)) {
      data.mod = data.mod.map(mod => {
        if(typeof modOptions[mod] !== 'undefined') {
          return modOptions[mod].name
        } else {
          return ''
        }
      });
    }
  }
  return data;
}