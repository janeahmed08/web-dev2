const prompt = require('prompt-sync')();
const fs = require('fs');
const path = require('path');

class Groceryapp {
    const() {
        this.grs = [];
        this.loadGrs();
    }

    loadGrs() {
        try {
            const data = fs.readFileSync('groceries.txt', 'utf8');
            this.grs = JSON.parse(data);
            console.log('Groceries loaded successfuly');
        } catch (err) {
            console.log('Not found.');
        }
    }

    saveGrs() {
        const data = JSON.stringify(this.grs);
        fs.writeFileSync('groceries.txt', data);
        console.log('Groceries saved successfuly.');
    }

    viewGrs() {
        console.log('Groceries:');
        for (let i = 0; i < this.grs.length; i++) {
            console.log(`${i+1} ${this.grs[i].name} - ${this.grs[i].price}`);
        }
    }

    calculateTotalC() {
        let totalCost = 0;
        for (let i = 0; i < this.groceries.length; i++) {
            totalCost += this.groceries[i].price;
        }
        console.log(`Total-cost : ${totalCost} `);
    }

    add() {
        const name = prompt('Enter objects name: ');
        const price = parseFloat(prompt('Enter price: '));
        this.grs.push({ name, price });
        console.log('Grocery added.');
        this.saveGrs();
    }
}
const app = new Groceryapp();
app.add();
app.viewGrs();
app.calculateTotalC();