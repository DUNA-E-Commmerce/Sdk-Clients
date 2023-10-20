package com.deuna.maven.domain

enum class CheckoutEvents(val value: String) {
    PURCHASE_REJECTED("purchaseRejected"),
    PURCHASE_SUCCESS("purchase")
}