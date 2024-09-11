import './PatchNotes.css';

import React from 'react';

import Footer from '../components/Footer/Footer';

const PatchNotes = () => {
  return (
    <section className='patch-notes'>
      <div className='patch-list'>
        <h3>Update Log</h3>
        <ul>
          <li>
            <div className='update-line'>
              <span>Update 35.0:</span>
              <span className='alpha-branch'>alpha branch</span>
            </div>
            <span>2023-08-28 (80e9f52c)</span>
          </li>
          <li>
            <div className='update-line'>
              <span>Update 35.1:</span>
              <span className='alpha-branch'>alpha branch</span>
            </div>
            <span>2023-08-30 (00f48fa5)</span>
          </li>
          <li>
            <div className='update-line'>
              <span>Update 35.2:</span>
              <span className='alpha-branch'>alpha branch</span>
            </div>
            <span>2023-09-05 (570e56ea)</span>
          </li>
          <li>
            <div className='update-line'>
              <span>Update 35.3:</span>
              <span className='alpha-branch'>alpha branch</span>
            </div>
            <span>2023-09-12 (8492a76e)</span>
          </li>
          <li>
            <div className='update-line'>
              <span>Update 35.4:</span>
              <span className='alpha-branch'>alpha branch</span>
            </div>
            <span>2023-09-13 (24bf3850)</span>
          </li>
          <li>
            <div className='update-line'>
              <span>Update 35.5:</span>
              <span className='alpha-branch'>alpha branch</span>
            </div>
            <span>2023-09-20 (039b781c)</span>
          </li>
          <li>
            <div className='update-line'>
              <span>Update 35.6:</span>
              <span className='alpha-branch'>alpha branch</span>
            </div>
            <span>2023-09-26 (d7b0cc1f)</span>
          </li>
          <li>
            <div className='update-line'>
              <span>Update 35.7:</span>
              <span className='alpha-branch'>alpha branch</span>
            </div>
            <span>2023-10-02 (cb0cac50)</span>
          </li>
          <li>
            <div className='update-line'>
              <span>Update 35.8:</span>
              <span className='alpha-branch'>alpha branch</span>
            </div>
            <span>2024-08-26 (50ed44f2)</span>
          </li>
        </ul>
      </div>
      <div className='notes-content'>
        <h2 className='title'>The End is Near</h2>
        <ul className='updates-list'>
          <li className='category'>
            <h3 className='title'>Important features</h3>
            <ul className='category-updates'>
              <li>
                New Mobs, Weapons and Mutations that all interact (more or less)
                with the Curse mechanic!
              </li>
              <li>
                New Brutality/Tactic Melee Weapon: Misericorde.
                <br />
                <br />
                Crits heavily on mobs with less than 50% health, but, if you
                don't kill with an attack, you get cursed.
              </li>
              <li>
                New Tactic/Survival Ranged Weapon: Anathema.
                <br />
                <br />
                Fires a very heavy curved projectile that explodes on contact.
                However, you get cursed if you hit anything with it.
              </li>
              <li>
                New Brutality/Survival Skill: Indulgence.
                <br />
                <br />
                Summons a ray of light on a near enemy dealing heavy damage,
                after a rather long cast. Killing an enemy with it clears 3
                stacks of Curse instead of 1.
                <br />
                <br />
                It will deal Critical Damage if you are not Cursed, or will
                summon an additional ray for each 5 Curses you have.
              </li>
              <li>
                3 New Colorless Mutations:
                <br />
                <br />
                Cursed Flask. The Health Flask no longer consumes a charge when
                used, but will give you 10 Curses instead.
                <br />
                <br />
                Damned Vigor. Prevents your death and puts you at 1 HP. You have
                2 seconds to kill an enemy to save yourself, otherwise you die
                (for real this time).
                <br />
                <br />
                Demonic Strength. Increases your damage by 30% if you are
                Cursed, with +1% per Curse stack.
              </li>
              <li>
                3 New Mobs:
                <br />
                <br />
                Sore Loser. A small enemy that cannot deal any damage, but is
                really sticky and annoying. Killing it will curse you.
                <br />
                <br />
                Curser. Shoots guided cursed skulls in your direction, with a
                melee attack if you get too close.
                <br />
                <br />
                Doom Bringer. Curses you with her damageless melee attack, or
                can ring her bell to stun you. If she hits you with more than 50
                curses, you die.
                <br />
                <br />
                Those mobs are a bit special, as they don't have a specific
                biomes in which they spawn. Instead, depending on the Boss Cells
                level, they have a small chance of appearing in any biome:
                <br />
                <br />
                Before 2BC, they cannot spawn at all.
                <br />
                <br />
                In 2BC, Sore Loser and Curser can spawn in biomes at depth 4 or
                more, while Doom Bringer can spawn in biomes at depth 5 or more.
                <br />
                <br />
                In 4BC and 5BC, they can spawn in any biome.
              </li>
              <li>
                40 New heads to unlock and equip! Go talk to the Tailor's
                Daughter to know more.
              </li>
              <li>Added an exit to Master's Keep in High Peak Castle.</li>
            </ul>
          </li>
          <li className='category'>
            <h3 className='title'>Balancing</h3>
            <ul className='category-updates'>
              <li>
                New Legendary Affix for Perfection: Almost Perfect.
                <br />
                <br />
                Killing an enemy less than a second after getting hit lets you
                continue critting with the weapon.
              </li>
              <li>
                New Legendary Affix for Gold Digger: Flithy Rich.
                <br />
                <br />
                Crit multiplier increases with your gold.
              </li>
              <li>
                New Legendary Affix for Gold Digger: Flithy Rich.
                <br />
                <br />
                Crit multiplier increases with your gold.
              </li>
              <li>
                New Legendary Affix for Punishment: Punish Combo.
                <br />
                <br />
                Recasts the shockwave if it kills at least one target.
              </li>
              <li>
                New Legendary Affix for Rampart: Mirror Coating.
                <br />
                <br />
                Getting hit while under the effect of the force field will
                trigger a parry effect.
              </li>
              <li>
                New Legendary Affix for Cocoon: Parry Streak.
                <br />
                <br />
                Each consecutive parry will reduce the cooldown of the skill the
                next time it starts.
              </li>
              <li>
                New Legendary Affix for Emergency Door: Armored Door.
                <br />
                <br />
                The door cannot be destroyed by mobs (except bosses).
              </li>
              <li>
                New Legendary Affix for Bone: Whirlwind.
                <br />
                <br />
                Increases the last attack's duration by 2 seconds everytime it
                kills.
              </li>
              <li>
                New Legendary Affix for Wrenching Whip: Retiarus.
                <br />
                <br />
                The first attack throws 3 Crow's Feet in front of you.
              </li>
              <li>
                New Legendary Affix for Explosive Decoy: Foolproof.
                <br />
                <br />
                The cooldown is instantly reset if the explosion doesn't hit
                anything.
              </li>
              <li>
                New Legendary Affix for Leghugger: Mitosis.
                <br />
                <br />
                Summons 2 Leghuggers instead of 1.
              </li>
              <li>
                New Legendary Affix for Assault Shield: Charged Dash.
                <br />
                <br />
                Holding the shield button will charge a stronger version of the
                dash, which can then be used by releasing the button.
              </li>
              <li>
                New Legendary Affix for Ice Shards: Bouncy.
                <br />
                <br />
                Projectiles bounce on the ground twice before disappearing.
              </li>
              <li>
                New Legendary Affix for Quick Bow: Sharpshooter.
                <br />
                <br />
                Critical hits will refill one ammo.
              </li>
              <li>
                New Legendary Affix for Bladed Tonfas: Lacerator.
                <br />
                <br />
                Only uses the first attack of the combo.
              </li>
              <li>
                New Legendary Affix for Grappling Hook: Octavio.
                <br />
                <br />
                Also fires a chain behind you.
              </li>
              <li>
                New Legendary Affix for Tesla Coil: Double Use.
                <br />
                <br />
                You can use the skill twice. Each use has its own cooldown.
              </li>
              <li>
                New Legendary Affix for Lightning Rods: Double Use.
                <br />
                <br />
                You can use the skill twice. Each use has its own cooldown.
              </li>
              <li>Reduced Throw Master's overall damage.</li>
              <li>Reduced Bank's bonus scaling in 2BC, 4BC and 5BC.</li>
              <li>
                Dead Inside no longer lets you use the Health Flask.
                <span className='sub-patch'>Update 35.1</span>
              </li>
              <li>
                Alienation rework. Instead of healing the player per curse
                reduced, it will now heal the player when the curse is lifted,
                with the amount of health recovered based on the max amount of
                curses they had (for that curse instance). The effect only
                starts triggering when the player had more than 10 curses.
                <span className='sub-patch'>Update 35.3</span>
              </li>
              <li>
                Reduced Dracula's Castle (late) scroll fragments count, to match
                other biomes at the same depth.
                <span className='sub-patch'>Update 35.3</span>
              </li>
              <li>
                Added a small cooldown to Emergency Triage forcefield.
                <span className='sub-patch'>Update 35.3</span>
              </li>
              <li>
                Fixed Mimic despawning when trying to jump a very long distance.
                <span className='sub-patch'>Update 35.5</span>
              </li>
            </ul>
          </li>
          <li className='category'>
            <h3 className='title'>Level design</h3>
            <ul className='category-updates'>
              <li>Added 2 new lore rooms in Graveyard.</li>
              <li>
                Added exits to Corrupted Prison and Ossuary in Castle's
                Outskirts.
              </li>
              <li>
                Added an exit to Dracula's Castle (early) in Corrupted Prison
                and Toxic Sewers.
              </li>
              <li>
                Added an exit to Black Bridge in Dracula's Castle (early).
              </li>
              <li>Added an exit to Defiled Necropolis in Ossuary.</li>
              <li>
                Replaced the exit to Fractured Shrines in Defiled Necropolis by
                an exit to Graveyard.
              </li>
              <li>
                Added a light source in the Mimic Hint lore room, when it spawns
                in Forgotten Sepulcher.
              </li>
              <li>
                Added an exit to Dracula's Castle (late) in Mausoleum,
                Guardian's Haven and Clock Room.
              </li>
            </ul>
          </li>
          <li className='category'>
            <h3 className='title'>Graphics & UI</h3>
            <ul className='category-updates'>
              <li>
                Added two new sets of control icons and an option to select
                them. You can select either "Legacy" (current icons), "New" (a
                new, cleaner set) or "Big" (accessibiliy focused, easier to
                read).
              </li>
              <li>
                Changed the Daily Challenge's boss arrow opacity, for better
                visibility.
              </li>
              <li>
                Added an option to select what type of controller icons to
                display (Xbox, PS4, etc). By default, the game auto-detects the
                type of controller used by the player, but that can be
                overridden with this option.
              </li>
              <li>
                Added Latin-American Spanish and Polish as language options.
                <span className='sub-patch'>Update 35.6</span>
              </li>
              <li>
                Added a Minimap icon when a biome is incentivized.
                <span className='sub-patch'>Update 35.7</span>
              </li>
            </ul>
          </li>
          <li className='category'>
            <h3 className='title'>Quality of life</h3>
            <ul className='category-updates'>
              <li>
                Added new input options for the "going through platform" action.
              </li>
              <li>
                Added options to change the controller triggers' deadzone.
              </li>
              <li>
                Reworked the Auto-hit assist mode option. It will no longer
                force the use of a melee weapon in the first slot.
              </li>
              <li>
                Added an option to add a background to most texts in the game.
                The background's color and opacity can be adjusted.
              </li>
              <li>
                The left stick can now be used to scroll through item
                descriptions in the pause menu.
              </li>
              <li>
                Added options to fully invert the player and camera movement.
              </li>
              <li>
                Added a bunch of options to tweak the camera's behavior. The
                influence of the player's movement, combat, or points of
                interest can be customized.
              </li>
              <li>
                Split the "controller sticks deadzone" into two options, one for
                each stick.
              </li>
              <li>Added an outline option for spikes.</li>
              <li>Added a button to center the minimap on the player.</li>
              <li>
                Removed the "Leave the Body" prompt of the throne fountain, when
                at 5BC. <span className='sub-patch'>Update 35.3</span>
              </li>
            </ul>
          </li>
          <li className='category'>
            <h3 className='title'>Bug fixes</h3>
            <ul className='category-updates'>
              <li>
                Fixed side mouse buttons being triggered on release instead of
                on press.
              </li>
              <li>Fixed Emergency Door sometimes breaking the bosses' AI.</li>
              <li>
                Fixed Legendary Scythe Claw dealing less damage than intended.
              </li>
              <li>
                Improved stability of Dracula's Castle (late) generation, which
                should fix some seeds crashing on loading the level.
              </li>
              <li>
                Fixed a crash when opening the world map after opening the Bank
                chest.
              </li>
              <li>
                Fixed Wings of the Crow not triggering the "landing" state when
                touching the ground.
              </li>
              <li>
                Fixed being able to freeze yourself by using the Face Flask with
                a "freeze on hit" necklace.
              </li>
              <li>
                Fixed the ground stomp doing abysmal damage to flying enemies.
              </li>
              <li>
                Fixed a bug where using Boy's Axe on Hand of the King would get
                him stuck in place.
              </li>
              <li>Fixed Mimics being turned into elites by the Malaise.</li>
              <li>Fixed Taunt not being able to roll many affixes.</li>
              <li>
                Fixed Timekeeper sometimes turning red during her boss fight.
              </li>
              <li>
                Fixed a softlock when using Blueprint Extraction on Medusa.
              </li>
              <li>Fixed Medusa's Head being able to duplicate Biters. what?</li>
              <li>
                Fixed not being able to use the Boss Cell after beating Dracula.
              </li>
              <li>Fixed map scroll speed being tied to the framerate.</li>
              <li>
                Fixed Owl of War sometimes not despawning after getting hit.
              </li>
              <li>Fixed invisible mobs' outline still being visible.</li>
              <li>
                Fixed a big FPS drop when dying with a Castlevania outfit.
              </li>
              <li>
                Fixed Petrified Key not spawning when playing with the custom
                mode option "Disable Free Items".
              </li>
              <li>
                Fixed being able to unlock the Dracula outfits through Boss
                Rush.
              </li>
              <li>Fixed Foresight sometimes not preventing damage.</li>
              <li>Fixed Barricade's description being inaccurate</li>
              <li>
                Fixed Custom Mode's Starting Equipment switching slots once in
                game.
              </li>
              <li>
                Fixed Dracula being able to throw the player outside the arena.
              </li>
              <li>
                Fixed Foresight not triggering during the Assault Shield's dash.
              </li>
              <li>
                Fixed Master's Keep stairs being in the foreground in Boss Rush.
              </li>
              <li>
                Fixed the map being displayed in the Mutation selection screen.
              </li>
              <li>Fixed the Homonculus not using the "hold to jump" option.</li>
              <li>Fixed Face Flask preventing flawless achievements</li>
              <li>
                Fixed the grenade summoned from some affixes being able to stun
                the player when hitting a Thorny.
              </li>
              <li>
                Reverted backpack to its own key binding, instead of being tied
                with interact.
              </li>
              <li>
                Fixed Diverse Deck's passive effects resetting when switching
                its slot.
              </li>
              <li>
                Fixed buggy voice lines when getting Castlevania outfits through
                the "Random Outfit Every Level" Custom Mode option.
              </li>
              <li>Fixed Wish not working on Machete & Pistol in some cases</li>
              <li>
                Fixed The Crown background music playing after the Queen revives
                the player.
              </li>
              <li>Fixed Legendary Affixes not applying affix exclusivity.</li>
              <li>
                Fixed Kleio looking the wrong way during their intro animation.
              </li>
              <li>
                Fixed level banners sometimes disappearing on the World Map or
                on the biome select UIs.
              </li>
              <li>Fixed Symmetrical Lance's description being inaccurate.</li>
              <li>
                Fixed Legendary Hayabusa Gauntlets DPS display being inaccurate.
              </li>
              <li>
                Fixed a crash when exiting the game while Medusa was performing
                her Petrification attack.
                <span className='sub-patch'>Update 35.1</span>
              </li>
              <li>
                Fixed Sewer's Tentacle movement particles not being played
                enough and being the wrong color.
                <span className='sub-patch'>Update 35.2</span>
              </li>
              <li>
                Fixed a crash sometimes happening when reloading the game when
                the Owl was active.
                <span className='sub-patch'>Update 35.2</span>
              </li>
              <li>
                Fixed Collector's menu flickering when opening it.
                <span className='sub-patch'>Update 35.2</span>
              </li>
              <li>
                Fixed Legendary Machete & Pistol not applying fire status
                effect.
                <span className='sub-patch'>Update 35.3</span>
              </li>
              <li>
                Fixed Exit Doors being able to generate in the wrong way.
                <span className='sub-patch'>Update 35.3</span>
              </li>
              <li>
                Fixed Timekeeper's name being wrong in Spanish and Portuguese.
                <span className='sub-patch'>Update 35.3</span>
              </li>
              <li>
                Fixed Kleio's spin attack being able to destroy projectiles.
                <span className='sub-patch'>Update 35.3</span>
              </li>
              <li>
                Fixed the "Ignore Global Shield" affix duplicating itself when
                rerolling a Symmetrical Lance.
                <span className='sub-patch'>Update 35.3</span>
              </li>
              <li>
                Fixed Boss Cell doors being able to generate after the Ram Rune
                gate in Dracula's Castle.
                <span className='sub-patch'>Update 35.3</span>
              </li>
              <li>
                Fixed Mushroom Boi sometimes freezing in place when trying to
                trigger its explosion.
                <span className='sub-patch'>Update 35.3</span>
              </li>
              <li>
                Fixed Alucard's Shield dealing self-damage when hitting a
                Thorny's back.
                <span className='sub-patch'>Update 35.3</span>
              </li>
              <li>
                Fixed Back Arrows, Front Arrows and Up Arrows, from the affixes,
                sometimes spawning at different heights.
                <span className='sub-patch'>Update 35.3</span>
              </li>
              <li>
                Fixed some head particle effects still appearing on outfits that
                already have a head.
                <span className='sub-patch'>Update 35.3</span>
              </li>
              <li>
                Fixed a crash when reloading the game while a Death's Scythe
                ghost is present.
                <span className='sub-patch'>Update 35.3</span>
              </li>
              <li>
                Fixed a bunch of texts overlapping other UI elements.
                <span className='sub-patch'>Update 35.3</span>
              </li>
              <li>
                Fixed mods not reloading properly.
                <span className='sub-patch'>Update 35.3</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <Footer />
    </section>
  );
};

export default PatchNotes;
