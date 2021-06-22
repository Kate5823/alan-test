let confirmOrder = context(() => {
    title("Confirmation context");

    follow('$(A yes|no)', p => {
        return p.resolve(p.A.value);
    });
});
//
let chooseDish = context(() => {
    title("Dish selection context");

    follow('get me a $(D pizza|burger)', async p => {
        p.play(`You have ordered a ${p.D.value}. Do you confirm?`);
        let answer = await p.then(confirmOrder);
        if (answer === "yes") {
            p.play('Your order has been confirmed');
            p.resolve();
        } else {
            p.play('OK, choose another dish that you want');
        }
    })
});

title("Default context");

intent('I want to order some food', p => {
    p.play('I can offer you a pizza or a burger');
    p.then(chooseDish);
});