global _start
section .data
    msg db 'udinpekok', 0xA
    len equ $ - msg

section .text
    _start:
        ; write(1, msg, len)
        mov eax, 4          ; syscall: sys_write
        mov ebx, 1          ; file descriptor: stdout
        mov ecx, msg        ; pointer to message
        mov edx, len        ; message length
        int 0x80            ; call kernel

        ; exit(0)
        mov eax, 1          ; syscall: sys_exit
        xor ebx, ebx        ; exit code 0
        int 0x80            ; call kernel
        
