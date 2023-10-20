package com.deuna.maven.domain

import org.json.JSONObject

data class OrderSuccessResponse(
    val user: User,
    val order: Order
) {
    data class User(
        val id: String,
        val is_guest: Boolean
    )

    data class Order(
        val order_id: String,
        val currency: String,
        val tax_amount: Int,
        val shipping_amount: Int,
        val items_total_amount: Int,
        val sub_total: Int,
        val total_amount: Int
    )

    companion object {
        fun fromJson(json: JSONObject): OrderSuccessResponse {
            val userData = json.getJSONObject("user")
            val orderData = json.getJSONObject("order")
            val user = User(
                userData.getString("id"),
                userData.getBoolean("is_guest")
            )
            val order = Order(
                orderData.getString("order_id"),
                orderData.getString("currency"),
                orderData.getInt("tax_amount"),
                orderData.getInt("shipping_amount"),
                orderData.getInt("items_total_amount"),
                orderData.getInt("sub_total"),
                orderData.getInt("total_amount")
            )
            return OrderSuccessResponse(user, order)
        }
    }
}
