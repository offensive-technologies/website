Private Declare PtrSafe Function QueueUserAPC Lib "kernel32" ( _
    ByVal pfnAPC As LongPtr, _
    ByVal hThread As LongPtr, _
    ByVal dwData As LongPtr
    ) As Long