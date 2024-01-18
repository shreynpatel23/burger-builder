// // Javascript code will come here

$(window).on('load', function () {
    // declare all the variables here
    let totalBreadCost = 0;
    let burgerIngredients = [];

    // initially the checkout button will be disabled
    addDisableOnCheckout();

    // toggle the checkout from modal
    toggleCheckoutModal('none')

    // initially the empty state should be visible because the type of bread is not selected
    toggleEmptyState()

    // render the quantity of each card
    // initially all the quantity will be 0
    initializeQuantity();

    // render total cost of the burger
    // initially it would be 0
    renderTotalAmountAndCalculateHST();

    // click event to choose the wheet type bread
    $('#add_wheat_bread').on('click', function () {
        // add active class on wheat bread card
        $(this).addClass('active');

        // remove active class from multigrain bread card
        $('#add_multigrain_bread').removeClass('active');

        // toggle the list of ingredients
        $('#toggle_patty_view').css('display', 'block');

        // assign wheat bread image url
        $('#top_bread').attr('src', 'images/wheat_top_bread.svg')
        $('#bottom_bread').attr('src', 'images/wheat_bottom_bread.svg')

        // toggle empty state
        toggleBurgerRender();

        // update the total bread cost
        totalBreadCost = 2;

        // render the total amount
        renderTotalAmountAndCalculateHST();

        // remove the disabled property on the button
        removeDisableOnCheckout();
    })

    // click event to choose the wheet type bread
    $('#add_multigrain_bread').on('click', function () {
        // add active class on multigrain bread card
        $(this).addClass('active');

        // remove active class from wheat bread card
        $('#add_wheat_bread').removeClass('active');

        // toggle the list of ingredients
        $('#toggle_patty_view').css('display', 'block');

        // assign multigrain bread image url
        $('#top_bread').attr('src', 'images/multigrain_top_bread.svg')
        $('#bottom_bread').attr('src', 'images/multigrain_bottom_bread.svg')

        // toggle empty state
        toggleBurgerRender();

        // update the total bread cost
        totalBreadCost = 3;

        // render the total amount
        renderTotalAmountAndCalculateHST();

        // remove the disabled property on the button
        removeDisableOnCheckout();
    })

    // add beef patty
    $('#add_beef_patty').on('click', function () {
        // update the burger ingredients array
        addIngredient({
            burgerIngredients,
            type: 'patty',
            name: 'beef',
            imageUrl: 'images/beef_burger.svg',
            amount: 7,
            quantitySelector: '#beef_quantity',
        })

        // render the total amount
        renderTotalAmountAndCalculateHST();
    })

    // remove beef patty 
    $('#remove_beef_patty').on('click', function () {
        // find the last index occuring index
        const removeIndex = burgerIngredients.map(e => e.name).lastIndexOf('beef');

        // check if the index exist
        if (removeIndex >= 0) {
            // filter the burger ingredients array
            burgerIngredients = burgerIngredients.filter((ingredient, index) => {
                if (index === removeIndex) {
                    removeIngredient(ingredient);
                }
                return index !== removeIndex
            });
        }

        // update the quantity
        renderQuantity('#beef_quantity', burgerIngredients?.filter((ingredient) => ingredient?.name === 'beef'));

        // render the total amount
        renderTotalAmountAndCalculateHST();
    })

    // add veggie patty
    $('#add_veggie_patty').on('click', function () {
        // update the burger ingredients array
        addIngredient({
            burgerIngredients,
            type: 'patty',
            name: 'veggie',
            imageUrl: 'images/veggie_burger.svg',
            amount: 5,
            quantitySelector: '#veggie_quantity',
        })

        // render the total amount
        renderTotalAmountAndCalculateHST();
    })

    // remove veggie patty 
    $('#remove_veggie_patty').on('click', function () {
        // find the last index occuring index
        const removeIndex = burgerIngredients.map(e => e.name).lastIndexOf('veggie');

        // check if the index exist
        if (removeIndex >= 0) {
            // filter the burger ingredients array
            burgerIngredients = burgerIngredients.filter((ingredient, index) => {
                if (index === removeIndex) {
                    removeIngredient(ingredient);
                }
                return index !== removeIndex
            });
        }

        // update the quantity
        renderQuantity('#veggie_quantity', burgerIngredients?.filter((ingredient) => ingredient?.name === 'veggie'));

        // render the total amount
        renderTotalAmountAndCalculateHST();
    })

    // add chicken patty
    $('#add_chicken_patty').on('click', function () {
        // update the burger ingredients array
        addIngredient({
            burgerIngredients,
            type: 'patty',
            name: 'chicken',
            imageUrl: 'images/chicken_burger.svg',
            amount: 6,
            quantitySelector: '#chicken_quantity',
        })

        // render the total amount
        renderTotalAmountAndCalculateHST();
    })

    // remove chicken patty 
    $('#remove_chicken_patty').on('click', function () {
        // find the last index occuring index
        const removeIndex = burgerIngredients.map(e => e.name).lastIndexOf('chicken');

        // check if the index exists
        if (removeIndex >= 0) {
            // filter the burger ingredients array
            burgerIngredients = burgerIngredients.filter((ingredient, index) => {
                if (index === removeIndex) {
                    removeIngredient(ingredient);
                }
                return index !== removeIndex
            });
        }

        // update the quantity
        renderQuantity('#chicken_quantity', burgerIngredients?.filter((ingredient) => ingredient?.name === 'chicken'));

        // render the total amount
        renderTotalAmountAndCalculateHST();
    })

    // add vegetables
    $('#add_vegetables').on('click', function () {
        // update the burger ingredients array
        addIngredient({
            burgerIngredients,
            type: 'vegetables',
            name: 'vegetables',
            imageUrl: 'images/vegitable.svg',
            amount: 3,
            quantitySelector: '#vegetables_quantity',
        })

        // render the total amount
        renderTotalAmountAndCalculateHST();
    })

    // remove vegetables 
    $('#remove_vegetables').on('click', function () {
        // find the last index occuring index
        const removeIndex = burgerIngredients.map(e => e.name).lastIndexOf('vegetables');

        // check if the index exists
        if (removeIndex >= 0) {
            // filter the burger ingredients array
            burgerIngredients = burgerIngredients.filter((ingredient, index) => {
                if (index === removeIndex) {
                    removeIngredient(ingredient);
                }
                return index !== removeIndex
            });
        }

        // update the quantity
        renderQuantity('#vegetables_quantity', burgerIngredients?.filter((ingredient) => ingredient?.name === 'vegetables'));

        // render the total amount
        renderTotalAmountAndCalculateHST();
    })

    // add liqiud cheese dressing
    $('#add_liquid_cheese_dressing').on('click', function () {
        // update the burger ingredients array
        addIngredient({
            burgerIngredients,
            type: 'dressing',
            name: 'liquidCheese',
            imageUrl: 'images/liquid_cheese.svg',
            amount: 1.99,
            quantitySelector: '#liquid_cheese_quantity',
        })

        // render the total amount
        renderTotalAmountAndCalculateHST();
    })

    // remove liquid cheese dressing 
    $('#remove_liquid_cheese_dressing').on('click', function () {
        // find the last index occuring index
        const removeIndex = burgerIngredients.map(e => e.name).lastIndexOf('liquidCheese');

        // check if the index exists
        if (removeIndex >= 0) {
            // filter the burger ingredients array
            burgerIngredients = burgerIngredients.filter((ingredient, index) => {
                if (index === removeIndex) {
                    removeIngredient(ingredient);
                }
                return index !== removeIndex
            });
        }

        // update the quantity
        renderQuantity('#liquid_cheese_quantity', burgerIngredients?.filter((ingredient) => ingredient?.name === 'liquidCheese'));

        // render the total amount
        renderTotalAmountAndCalculateHST();
    })

    // add cheddar cheese dressing
    $('#add_cheddar_cheese_dressing').on('click', function () {
        // update the burger ingredients array
        addIngredient({
            burgerIngredients,
            type: 'dressing',
            name: 'cheddarCheese',
            imageUrl: 'images/cheddar_cheese.svg',
            amount: 2.99,
            quantitySelector: '#cheddar_cheese_quantity',
        })

        // render the total amount
        renderTotalAmountAndCalculateHST();
    })

    // remove cheddar cheese dressing 
    $('#remove_cheddar_cheese_dressing').on('click', function () {
        // find the last index occuring index
        const removeIndex = burgerIngredients.map(e => e.name).lastIndexOf('cheddarCheese');

        // check if the index exists
        if (removeIndex >= 0) {
            // filter the burger ingredients array
            burgerIngredients = burgerIngredients.filter((ingredient, index) => {
                if (index === removeIndex) {
                    removeIngredient(ingredient);
                }
                return index !== removeIndex
            });
        }

        // update the quantity
        renderQuantity('#cheddar_cheese_quantity', burgerIngredients?.filter((ingredient) => ingredient?.name === 'cheddarCheese'));

        // render the total amount
        renderTotalAmountAndCalculateHST();
    })

    // add mozzarella cheese dressing
    $('#add_mozzarella_cheese_dressing').on('click', function () {
        // update the burger ingredients array
        addIngredient({
            burgerIngredients,
            type: 'dressing',
            name: 'mozzarellaCheese',
            imageUrl: 'images/mozzarella_cheese.svg',
            amount: 2.99,
            quantitySelector: '#mozzarella_cheese_quantity',
        })

        // render the total amount
        renderTotalAmountAndCalculateHST();
    })

    // remove cheddar cheese dressing 
    $('#remove_mozzarella_cheese_dressing').on('click', function () {
        // find the last index occuring index
        const removeIndex = burgerIngredients.map(e => e.name).lastIndexOf('mozzarellaCheese');

        // check if the index exists
        if (removeIndex >= 0) {
            // filter the burger ingredients array
            burgerIngredients = burgerIngredients.filter((ingredient, index) => {
                if (index === removeIndex) {
                    removeIngredient(ingredient);
                }
                return index !== removeIndex
            });
        }

        // update the quantity
        renderQuantity('#mozzarella_cheese_quantity', burgerIngredients?.filter((ingredient) => ingredient?.name === 'mozzarellaCheese'));

        // render the total amount
        renderTotalAmountAndCalculateHST();
    })

    // clear all
    $('#clear_form').on('click', clearAll);

    // place order button
    $('#place_order').on('click', placeOrder)

    // checkout button
    $('#checkout_form').on('click', function () {
        renderTotalAmountAndCalculateHST();
        toggleCheckoutModal('block')
    });

    // close modal button
    $('#cross_icon').on('click', function () {
        toggleCheckoutModal('none')
    });

    // function to add any ingredient to the burger
    // it will take 6 arguments
    // existing burger ingredients, type of ingredient, name of ingredient, image url of ingredient, 
    // amount of ingredient, quantity selector to update the quantity 
    function addIngredient({ burgerIngredients, type, name, imageUrl, amount, quantitySelector }) {
        // create the ingredient object
        let ingredient = {
            index: burgerIngredients.length,
            type,
            name,
            imageUrl,
            amount,
        }
        // add the object in the burgerIngredients array 
        burgerIngredients.push(ingredient)

        // append the ingredient to the burger view
        appendIngredient(ingredient);

        // update the quantity count 
        renderQuantity(quantitySelector, burgerIngredients?.filter((ingredient) => ingredient?.name === name));

        // remove the disabled property on the button
        removeDisableOnCheckout();
    }

    // this function removes a particular ingredient
    function removeIngredient(ingredient) {
        $(`#id${ingredient?.index}`).remove();
    }

    // this function append image of the ingredient to the burger view
    function appendIngredient(ingredient) {
        if (ingredient?.type === 'dressing') {
            $('#burger_wrapper').append(`<img src=${ingredient?.imageUrl} alt=${ingredient?.name} id='id${ingredient?.index}' class='align_dressing' />`)
        } else if (ingredient?.type === 'vegetables') {
            $('#burger_wrapper').append(`<img src=${ingredient?.imageUrl} alt=${ingredient?.name} id='id${ingredient?.index}' class='align_vegetables' />`)
        } else {
            $('#burger_wrapper').append(`<img src=${ingredient?.imageUrl} alt=${ingredient?.name} id='id${ingredient?.index}' />`)
        }
    }

    // this function renders the quantity of the ingredient
    function renderQuantity(selector, burgerIngredients) {
        $(selector).html(burgerIngredients?.length);
    }


    // this function will toggle the empty state when any type of bread is selected 
    function toggleBurgerRender() {
        $('#burger_render').css('display', 'block');
        $('#empty_state').css('display', 'none');
    }

    // this function will toggle the empty state
    function toggleEmptyState() {
        $('#empty_state').css('display', 'block');
        $('#burger_render').css('display', 'none');
    }

    // this function renders the total amount of the burger
    function renderTotalAmountAndCalculateHST() {
        let totalAmount = 0;
        burgerIngredients?.map(ingredient => totalAmount += ingredient?.amount);

        // compute the total by adding the value of each ingredient and the bread cost
        const total = totalAmount + totalBreadCost;
        $('#totalBurgerCost').text(`$ ${total?.toFixed(2)}`)

        // render the total amount on the checkout modal
        $('#pricing_value').text(`$ ${total?.toFixed(2)}`);

        // calculate the total hst
        const hst = total * 0.13;
        $('#hst').text(`$ ${hst?.toFixed(2)}`);

        // append the total
        $('#total').text(`$ ${(total + hst)?.toFixed(2)}`);
    }

    // this function initialise the quantity to 0
    function initializeQuantity() {
        renderQuantity('#beef_quantity', []);
        renderQuantity('#veggie_quantity', []);
        renderQuantity('#chicken_quantity', []);
        renderQuantity('#vegetables_quantity', []);
        renderQuantity('#liquid_cheese_quantity', []);
        renderQuantity('#cheddar_cheese_quantity', []);
        renderQuantity('#mozzarella_cheese_quantity', []);
    }

    // this function will clear all the ingredients
    function clearAll() {

        // add the disabled attribute on the checkout button
        addDisableOnCheckout();

        // remove active class from multigrain bread card
        $('#add_multigrain_bread').removeClass('active');

        // remove active class from multigrain bread card
        $('#add_wheat_bread').removeClass('active');

        // toggle the list of ingredients
        $('#toggle_patty_view').css('display', 'none');

        // make total bread cost 0
        totalBreadCost = 0;

        // remove all the ingredients of the burger
        burgerIngredients.map((ingredient) => removeIngredient(ingredient));

        // re-initialize the burger ingredients array
        burgerIngredients = [];

        // toggle empty state
        toggleEmptyState();

        // update the total amount
        renderTotalAmountAndCalculateHST();

        // re-initialize the quantity
        initializeQuantity();
    }

    // this function will place the order
    function placeOrder() {
        // display the success message
        $('#checkout_modal_card').html("<p class='center'>Thank you for placing the order!</p>");

        // add a timeout of the 5 seconds and disable the modal
        setTimeout(() => {
            window.location.reload();
        }, 5000);
    }

    // this function toggles the checkout modal
    function toggleCheckoutModal(displayValue) {
        $('#checkout_modal').css('display', displayValue);
    }

    // function to add the disabled property on the checkout button
    function addDisableOnCheckout() {
        $('#checkout_form').attr('disabled', true);
    }

    // function to remove the disabled attribute on the checkout button
    function removeDisableOnCheckout() {
        $("#checkout_form").removeAttr("disabled");
    }
})