Private Declare PtrSafe Function NtCreateThreadEx Lib "ntdll.dll" ( _
    ByRef ThreadHandle As LongPtr, _
    ByVal DesiredAccess As LongLong, _
    ByVal ObjectAttributes As LongPtr, _
    ByVal ProcessHandle As LongPtr, _
    ByVal StartRoutine As LongPtr, _
    ByVal Argument As LongPtr, _
    ByVal CreateFlags As LongLong, _
    ByVal ZeroBits As LongLong, _
    ByVal StackSize As LongLong, _
    ByVal MaximumStackSize As LongLong, _
    ByVal AttributeList As LongPtr
    ) As Long