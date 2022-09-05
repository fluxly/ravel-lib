import './cryptozoologic-nessie.js';
import './cryptozoologic-pukwudgie.js';
import './cryptozoologic-shempscape.js';
import './cryptozoologic-mothman.js';
import './cryptozoologic-irish-yeti.js';
import './cryptozoologic-ozark-howler.js';
import './cryptozoologic-bessie.js';
import './cryptozoologic-tessie.js';
import './cryptozoologic-fluxly.js';
import './cryptozoologic-yak-shaver.js';
import './cryptozoologic-whumpus.js';
/*import './cryptozoologic-batsquatch.js';
import './cryptozoologic-beast-of-cardiff.js';
import './cryptozoologic-donut-beast.js';
import './cryptozoologic-jersey-devil.js';
import './cryptozoologic-lizard-man.js';
import './cryptozoologic-montauk-monster.js';
import './cryptozoologic-murray.js';
import './cryptozoologic-mograh.js';
import './cryptozoologic-gorrog.js';
import './cryptozoologic-snake-scarecrow.js';
import './cryptozoologic-vampire-unicorn.js';
import './cryptozoologic-pyrahua.js';
import './cryptozoologic-vivian-ghastly.js';
import './cryptozoologic-spark-boa.js';
import './cryptozoologic-smoke-crow.js';
import './cryptozoologic-beast-of-baz.js';
import './cryptozoologic-ningen.js';
import './cryptozoologic-yowie.js';
import './cryptozoologic-dark-thunderbird.js';
import './cryptozoologic-ogopogo.js';*/
import '../ravel-progressive-composition.js';
import '../ravel-slider.js';
import '../ravel-switch.js';
import '../ravel-sequence.js';
import '../ravel-visualizer-1.js';
import '../ravel-pot.js';
import '../ravel-physics-world.js';
import '../ravel-fluxum.js';
import '../ravel-field-recorder.js';

import { RavelEmoji } from "../RavelEmoji.js";
import { GameMetadata } from "./GameMetadata.js";

for (let key of Object.keys(GameMetadata)) {
    let icon = RavelEmoji.getRandomEmoji();
    let element = GameMetadata[key].element;
    document.querySelector('#menu-container').innerHTML += `
    <div class="game-menu-item" id="game-${element}">
        <div class="game-menu-item-icon">${icon}</div>
        <div class="game-menu-item-label">${key}</div>
    </div>
    `;
}
for (let key of Object.keys(GameMetadata)) {
    let element = GameMetadata[key].element;
    document.querySelector(`#game-${element}`).addEventListener('click', async (evt) => {
        document.querySelector('#menu-container').classList.remove('slide-in-down');
        document.querySelector('#menu-container').classList.add('slide-out-up');
        await new Promise( resolve => setTimeout(resolve, 500));
        document.querySelector('#game-container').classList.remove('slide-out-up');
        document.querySelector('#game-container').style.display = "block";
        document.querySelector('#game-container').innerHTML = `<${element}></${element}>`;
    });
}
document.querySelector(`#hamburger`).addEventListener('click', async (evt) => {
    document.querySelector('#game-container').classList.add('slide-out-up');
    document.querySelector('#menu-container').classList.remove('slide-out-up');
    document.querySelector('#menu-container').classList.add('slide-in-down');
    await new Promise( resolve => setTimeout(resolve, 500));
    document.querySelector('#game-container').innerHTML = '';
});
