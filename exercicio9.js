function contagemRegressiva() {
    for (let i = 10; i >= 1; i--) {
        setTimeout(() => {
            console.log(i);
            if (i === 1) {
                console.log("Contagem regressiva concluída!");
            }
        }, (10 - i) * 1000);
    }
}

contagemRegressiva();