export function isAllSelected(dicesData) {
  for (let i = 0; i < dicesData.length; i++) {
    if (!dicesData[i].selected) {
      return false;
    }
  }

  return true;
}

export function isWon(dicesData) {
  if (isAllSelected(dicesData)) {
    const firstDiceNumber = dicesData[0].number;

    for (let i = 1; i < dicesData.length; i++) {
      if (dicesData[i].number !== firstDiceNumber) {
        return false;
      }
    }
    return true;
  }
}
