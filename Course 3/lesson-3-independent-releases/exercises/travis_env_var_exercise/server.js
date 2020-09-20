const favoriteFood = process.env.FAVORITE_FOOD;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(process.env.favoriteFood);
    
    await sleep(5000);
  }
}

main();
