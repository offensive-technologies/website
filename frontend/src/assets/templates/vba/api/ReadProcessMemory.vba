Private Declare PtrSafe Function ReadProcessMemory Lib "kernel32" ( _
    ByVal hProcess As LongPtr, _
    ByVal lpBaseAddress As LongPtr, _
    ByVal lpBuffer As LongPtr, _
    ByVal nSize As LongLong, _
    ByVal lpNumberOfBytesRead As LongPtr
    ) As Long