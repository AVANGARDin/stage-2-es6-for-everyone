import { createElement } from '../helpers/domHelper';

export function createFighterPreview(fighter, position) {
  const positionClassName = position === 'right' ? 'fighter-preview___right' : 'fighter-preview___left';
  const fighterElement = createElement({
    tagName: 'div',
    className: `fighter-preview___root ${positionClassName}`,
  });

  // todo: show fighter info (image, name, health, etc.)
  
  if(fighter) {
    const fighterInfoBox = createElement({
      tagName: 'div',
      className: `fighter-info__box`,
    });

    fighterInfoBox.innerHTML = `
    <div class='fighter-info'>
      <div>Name</div>
      <div class='dashed'></div>
      <div>${fighter.name}</div>
    </div>
    <div class='fighter-info'>
      <div>Health</div>
      <div class='dashed'></div>
      <div>${fighter.health}</div>
    </div>
    <div class='fighter-info'>
      <div>Attack</div>
      <div class='dashed'></div>
      <div>${fighter.attack}</div>
    </div>
    <div class='fighter-info'>
      <div>Defense</div>
      <div class='dashed'></div>
      <div>${fighter.defense}</div>
    </div>
    `

    fighterElement.appendChild(createFighterImage(fighter));
    fighterElement.appendChild(fighterInfoBox)
  }

  return fighterElement;
}

export function createFighterImage(fighter) {
  const { source, name } = fighter;
  const attributes = { 
    src: source, 
    title: name,
    alt: name 
  };
  const imgElement = createElement({
    tagName: 'img',
    className: 'fighter-preview___img',
    attributes,
  });

  return imgElement;
}
