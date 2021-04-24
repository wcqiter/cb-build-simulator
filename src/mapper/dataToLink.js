import defaultStat from '@/data/stat.json'
import defaultPart from '@/data/part.json'
import modOptions from '@/data/options.js'
import cardOptions from '@/data/cards.js'

function recursiveFilter(part) {
  var data = {};
  Object.keys(defaultPart).forEach(key => {
    data[key] = part[key];
  });
  
  if(Object.prototype.hasOwnProperty.call(data, 'tag')) {
    if(Array.isArray(data.tag)) {
      if(!data.tag.includes('main')) {
        delete data['main'];
      }
      if(!data.tag.includes('sub')) {
        delete data['sub'];
      }
    }
  }
  if(Array.isArray(data.mod)) {
    data.mod = data.mod.map(mod => {
      var index = modOptions.findIndex(m => m.name === mod);
      return index;
    })
  }
  
  if(Array.isArray(data.children)) {
    data.children = data.children.map(child => recursiveFilter(child))
  }
  
  Object.keys(data).forEach(key => {
    if(Array.isArray(data[key]) && data[key].length === 0) {
      delete data[key];
    }
  });
  return data;
}

export default function parse(data) {
  var stat = data.stat;
  if(stat.partsUsed) {
    delete data['mod'];
  } else {
    delete data['parts'];
  }
  
  var statArray = [];
  Object.keys(defaultStat).forEach(key => {
    if(typeof stat[key] === 'boolean') {
      if(stat[key] === true) {
        statArray.push(1);
      } else {
        statArray.push(0);
      }
    } else {
      statArray.push(stat[key]);
    }
  })
  data.stat = statArray;
  
  data.capaCards = data.capaCards.map(i => i ? 1 : 0);
  data.weaponCards = data.weaponCards.map(i => i ? 1 : 0);
  data.capaCardsExcept = data.capaCardsExcept.map(i => i ? 1 : 0);
  data.weaponCardsExcept = data.weaponCardsExcept.map(i => i ? 1 : 0);
  
  if(Array.isArray(data.cards)) {
    data.cards = data.cards.map(card => {
      var index = cardOptions.filter(c => c.type !== 'extra-move').findIndex(c => c.name === card);
      return index;
    })
  }
  if(Array.isArray(data.extraCards)) {
    data.extraCards = data.extraCards.map(card => {
      var index = cardOptions.filter(c => c.type === 'extra-move').findIndex(c => c.name === card);
      return index;
    })
  }

  if(Object.prototype.hasOwnProperty.call(data, 'parts')) {
    data.parts = recursiveFilter(data.parts);
  }
  if(Object.prototype.hasOwnProperty.call(data, 'mod')) {
    if(Array.isArray(data.mod)) {
      data.mod = data.mod.map(mod => {
        var index = modOptions.findIndex(m => m.name === mod);
        return index;
      })
    }
  }
   
  var str = window.btoa(JSON.stringify(data));
  //var str = JSON.stringify(data);
  return str;
}