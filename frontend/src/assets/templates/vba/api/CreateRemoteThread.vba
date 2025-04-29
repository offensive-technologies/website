Private Declare PtrSafe Function CreateRemoteThread Lib "kernel32" ( _
    ByVal hProcess As LongPtr, _
    ByVal lpThreadAttributes As LongPtr, _
    ByVal dwStackSize As LongLong, _
    ByVal lpStartAddress As LongPtr, _
    ByVal lpParameter As LongPtr, _
    ByVal dwCreationFlags As LongLong, _
    ByVal lpThreadId As LongPtr
    ) As LongPtr