# REACTO: BossFight.js

You're creating the final level of the role playing game, <b>Final Stackery 7</b>.

##Scenario

<b>Your mission:</b> Implement a Javascript based 'final battle scenario', where your hero, Stacky, fights against the boss, the Evil Lord Exception. <b><i>This scenario should be written in Object Oriented Javascript.</i></b> Simulate 100 battles, and determine how often your hero would win as well as how often the boss would win.

##Rules

Heroes and bosses should have the ability to:
<ul>
    <li>Have health (aka HP). If a player reaches 0 HP, they are considered 'dead', and the battle should end.</li>
    <li>Attack for a certain amount of damage. This will remove hit points from their opponents)</li> 
    <li>Dodge Attacks. Every turn, the player gets a chance to dodge, which means their opponent's attack would fail.</li>
</ul>

Your hero, Stacky, should have the following abilities/properties:

```
Health: 60HP,

Attack: -6 HP from opponent,

Dodge: Dodges attacks from opponents 60% of the time
```

The boss, the Evil Lord Exception, should have the following abilities/properties:

```
Health: 100HP,

Attack: -10 HP from opponent,

Dodge: Dodges attacks from opponents 20% of the time
```

Certain aspects of battle, such as how Dodge works, turn order (aka 'initiative') or attack mechanics, are completely up to you.

Good luck, and may the odds be ever in your favor.

##Extra Credit

Spoiler Alert: Wow, that battle was one sided. Time to level up a bit.

Your hero, Stacky, finds the <a href="https://www.youtube.com/watch?v=OBtsMTnstZM" target="_blank">Sword of Refactoring</a>! They now have a special attack, which means that 33% of the time, their attacks hit for 1/5 of the boss's health <i>(eg, if the boss's health is 100HP, your hero's attack will -20HP from the boss)</i>. If the special attack is used, but does not succeed (aka 67% of the time), a normal attack is used.

Implement this method in your solution, but only have Stacky use this attack if beneficial to do so.