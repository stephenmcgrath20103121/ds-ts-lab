import {Friend, Colleague } from './myTypes'
import { friends, colleagues } from './01-basics'

function older(f: Friend) : string {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}

function allOlder(friends: Friend[]): string[] {
    const ages: string[] = [];
    for (var friend of friends){
        var currentage = `${friend.name} is now ${friend.age+1}`;
        ages.push(currentage)
    }
    return ages;
}

console.log(allOlder(friends))

console.log(older(friends[0]))

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}
console.log(highestExtension(colleagues.current));

function addColleague(colleagues: Colleague[], name: string, department: string, email: string){
    const highestColleague: Colleague = highestExtension(colleagues);
    const newColleagueExtension: number = highestColleague.contact.extension+1;
    const newColleague: Colleague =  {name: name, department: department, contact: {email: email, extension: newColleagueExtension}};
    colleagues.push(newColleague)
}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));
