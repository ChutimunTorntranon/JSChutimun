//alert(null || 2 || undefined); // 2

//alert(alert(1) || 2 || alert(3)); //
//lert(undefined || true || ... )

//alert(1 && null && 2);
//alert(alert(1) && alert(2));
//alert(1) && alert(2) == > undefined

// alert(null || (2 && 3) || 4);

alert(null || 2 || undefined); // 2
alert(alert(1) || 2 || alert(3)); // 1
alert(1 && null && 2); // 2
alert(alert(1) && alert(2)); // null
alert(null || (2 && 3) || 4); // 1 // undefined // 3
