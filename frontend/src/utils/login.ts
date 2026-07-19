export function validateUsername(username: string) {
    if (!username) {
        return { valid: false, message: '' }; 
    }
    
    const isValid = username.trim().length >= 3 && !username.startsWith(' ');

    return {
        valid: isValid,
        message: isValid ? 'Nome válido' : 'Mínimo de 3 caracteres válidos'
    };
}

export function calculatePasswordStrength(password: string) {
    if (password.length < 8) {
        return 'A senha deve ter pelo menos 8 caracteres';
    } 

    const hasNumber = /[0-9]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasSpecial = /[^a-zA-Z0-9]/.test(password);

    let score = 0;

    if (hasNumber) score++;
    if (hasUppercase) score++;
    if (hasSpecial) score++;

    if (score === 0)
        return {
            score: 1,
            label: 'Muito fraca',
            color: '#EF4444',
            width: '25%'
        };

    if (score === 1)
        return {
            score: 2,
            label: 'Fraca',
            color: '#F97316',
            width: '50%',
        };

    if (score === 2)
        return {
            score: 3,
            label: 'Média',
            color: '#EAB308',
            width: '75%'
        };

    if (score === 3)
    return {
        score: 4,
        label: 'Forte',
        color: '#22C55E',
        width: '100%'
    };
}

export function validateEmail(email: string) {
    if (!email) {
        return { valid: false, score: 0, message: '' };
    }

    const hasAt = /@/.test(email);
    const hasDot = /\./.test(email);
    
    let score = 0;
    if (hasAt) score++;
    if (hasDot) score++;

    const isValid = score === 2;

    return {
        valid: isValid,
        score,
        message: isValid ? 'Endereço de email válido' : 'Endereço de email inválido'
    };
}

export function passwordsMatch(
   password: string,
   confirmPassword: string
) {
    if (!password || !confirmPassword) {
        return { valid: false, score: 0, message: '' };
    }

    let score = 0;

    if (password === confirmPassword) score++;
    
    const isValid = score === 1;

    return {
        valid: isValid,
        score,
        message: isValid ? 'Senha válida' : 'Senha diferente da digitada anteriormente'
    };
}

export function validateDate(data: string[]) {
    const validData = data.every(d => d !== '');
    if (!validData) return { valid: false, score: 0, message: '' };

    let score = 0;

    if (validData) score++;
    
    const isValid = score === 1;

    return {
        valid: isValid,
        score,
        message: isValid ? '' : 'Dados não preechidos'
    };
}

