Private Declare PtrSafe Function TerminateProcess Lib "kernel32" ( _
    ByVal hProcess As LongPtr, _
    ByVal uExitCode As LongLong
    ) As Long