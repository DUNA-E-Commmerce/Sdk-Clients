suspend fun main(args: Array<String>) {
    val client = OkHttpClient()
    val apiInstance = MerchantsApi(client = client)
    TokenizeOrder(apiInstance)
}

suspend fun TokenizeOrder(apiInstance: MerchantsApi) {


    val tokenizeOrderModel = TokenizeOrderRequest(
        orderType = "DEUNA_NOW",
       order = TokenizeOrderRequestOrder(
           billingAddress = TokenizeOrderRequestOrderBillingAddress(
               firstName = "Ignacio",
               lastName = "Silva",
               phone = "+56985169385",
               identityDocument = "1111111111-1",
               lat = BigDecimal(-0.1602236),
               lng = BigDecimal(-78.49664),
               address1 = "Av. del Parque, Quito 170132, Ecuador",
               address2 = "12",
               city = "Quito",
               zipcode = "170132",
               stateName = "Pichincha",
               stateCode = "PICHINCHA",
               country = "MX",
               additionalDescription = "12",
               addressType = "home",
               email = "isilva@deuna.com"

           ),
           shippingAddress = TokenizeOrderRequestOrderShippingAddress(
               id = 0,
               userId = "0",
               firstName = "John",
               lastName = "Doe",
               phone = "+0011234567890",
               identityDocument = "1234123412345",
               lat = BigDecimal(0),
               lng = BigDecimal(0),
               address1 = "José Luis Lagrange 207A, Polanco, Polanco I Secc, Miguel Hidalgo, 11510 Ciudad de México, CDMX, Mexico",
               address2 = "José Luis Lagrange 207A, Polanco, Polanco I Secc, Miguel Hidalgo, 11510 Ciudad de México, CDMX, Mexico",
               city = "Ciudad de México",
               zipcode = "11510",
               stateName = "Ciudad de México",
               countryCode = "MX",
               additionalDescription = "",
               addressType = "home",
               isDefault = false,
               createdAt = "",
               updatedAt = "",
           ),
           orderId = "ordertokenizada12357",
           storeCode = "all",
           currency = "MXN",
           taxAmount = 6800,
           displayTaxAmount = "MXN 0.00",
           shippingAmount = 0,
           displayShippingAmount = "MXN 0.00",
           itemsTotalAmount = 567,
           displayItemsTotalAmount = "MXN 5.67",
           displaySubTotal = "MXN 5.67",
           totalTaxAmount = 20000,
           subTotal = 80000,
           totalAmount = 100000,
           displayTotalAmount = "MXN 6.35",
           discounts = mutableListOf(),
           items = mutableListOf(
               TokenizeOrderRequestOrderItemsInner(
                   id = "200516",
                   name = "BIG BOX RECARGADO",
                   description = "",
                   options = "",
                   totalAmount = TokenizeOrderRequestOrderItemsInnerTotalAmount(
                       amount = 635,
                       originalAmount = 0,
                       displayAmount = "MXN 6.35",
                       displayOriginalAmount = "MXN 0.00",
                       currency = "MXN",
                       currencySymbol = "$",
                       totalDiscount = 0,
                       displayTotalDiscount = "MXN 0.00"
                   ),
                   unitPrice = TokenizeOrderRequestOrderItemsInnerTaxAmount(
                       amount = 635,
                       displayAmount = "MXN 6.35",
                       currency = "MXN",
                       currencySymbol = "$"
                   ),
                   taxAmount = TokenizeOrderRequestOrderItemsInnerTaxAmount(
                       amount = 0,
                       displayAmount = "MXN 0.00",
                       currency = "MXN",
                       currencySymbol = "$"
                   ),
                   quantity = 1,
                   uom = "",
                   upc = "",
                   sku = "",
                   isbn = "",
                   brand = "KENTUCKY FRIED CHICKEN",
                   manufacturer = "",
                   category = "",
                   color = "",
                   weight = TokenizeOrderRequestOrderItemsInnerWeight(
                       weight = 0,
                       unit = ""
                   ),
                   imageUrl = "https://s3.amazonaws.com/admin.kfc.production/products/llevar_33282_744x744_1637084636_1637117222.png",
                   detailsUrl = "",
                   type = "physical",
                   taxable = true
               )

           ),
           paymentLink = "",
           displayShippingTaxAmount = "MXN 0.00",
           displayTotalTaxAmount = "MXN 0.68",
           shippingTaxAmount = 0
       )
    )

    val result = apiInstance.tokenizeOrder(xApiKey = "e9370b70720d9e595fb03845396b78b32f62077f1ffb0bec0d98fbf6726924da31000fc803d8ed1c8222ec46d83b43beb365a2a47061085b21c9398714e7", tokenizeOrderRequest = tokenizeOrderModel)
    println(result)
}