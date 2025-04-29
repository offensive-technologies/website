Private Declare PtrSafe Function CreateProcessW Lib "kernel32" ( _
    ByVal lpApplicationName As LongPtr, _
    ByVal lpCommandLine As LongPtr, _
    ByVal lpProcessAttributes As LongPtr, _
    ByVal lpThreadAttributes As LongPtr, _
    ByVal bInheritHandles As Long, _
    ByVal dwCreationFlags As Long, _
    ByVal lpEnvironment As LongPtr, _
    ByVal lpCurrentDirectory As LongPtr, _
    ByVal lpStartupInfo As LongPtr, _
    ByVal lpProcessInformation As LongPtr
    ) As Long