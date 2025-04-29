Private Declare PtrSafe Function OpenProcess Lib "kernel32" ( _
    ByVal dwDesiredAccess As LongLong, _
    ByVal bInheritHandle As LongLong, _
    ByVal dwProcessId As LongLong
    ) As LongPtr