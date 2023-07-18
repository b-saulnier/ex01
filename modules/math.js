

class MathGames {

    // a timeout is added here to simulate working with real asynchronous apis
    add(x, y) {
        //return x + y;
        return new Promise((resolve) => {
            setTimeout(() => {
              const data = x + y;
              resolve(data);
            }, 1000); 
        });
    }

    sub(x, y) { 
        //return x - y;  
        return new Promise((resolve) => {
            setTimeout(() => {
              const data = x - y;
              resolve(data);
            }, 1000); 
        });
    }

    pickRandom(x, y) {
        //return (Math.random() < 0.5) ? x : y;    
        return new Promise((resolve) => {
            setTimeout(() => {
              const data = (Math.random() < 0.5) ? x : y; 
              resolve(data);
            }, 1000); 
        });
    }
    
}

const mathGames = new MathGames();
export default mathGames;