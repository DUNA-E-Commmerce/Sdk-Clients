package com.deuna.maven.domain

import android.webkit.WebView

class Callbacks {
    var onSuccess: ((OrderSuccessResponse) -> Unit)? = null
    var onError: ((OrderErrorResponse?, String?) -> Unit)? = null
    var onClose: ((WebView) -> Unit)? = null
}
