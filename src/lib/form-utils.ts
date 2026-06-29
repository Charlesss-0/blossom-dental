import { format } from 'date-fns';

export const formatPhoneNumber = (value: string) => {
	if (!value) return '';

	// Remove all non-digit characters first
	let digits = value.replace(/\D/g, '');

	// Detect and remove Nicaragua country code patterns
	// Patterns: +505, 00505, 505 at the beginning
	if (digits.startsWith('505')) {
		digits = digits.slice(3); // Remove 505 country code
	} else if (digits.startsWith('00505')) {
		digits = digits.slice(5); // Remove 00505 international dialing prefix
	}

	// Limit to 8 digits for Nicaragua numbers
	digits = digits.slice(0, 8);

	if (digits.length <= 4) {
		return digits;
	}

	if (digits.length <= 8) {
		return `${digits.slice(0, 4)} ${digits.slice(4)}`;
	}

	return `${digits.slice(0, 4)} ${digits.slice(4, 8)}`;
};

export interface PhoneValidationResult {
	isValid: boolean;
	errors: string[];
}

export const validatePhone = (phone: string): PhoneValidationResult => {
	// Remove all non-digit characters first
	let digits = phone.replace(/[^\d]/g, '');

	// Detect and remove Nicaragua country code patterns for validation
	if (digits.startsWith('505')) {
		digits = digits.slice(3); // Remove 505 country code
	} else if (digits.startsWith('00505')) {
		digits = digits.slice(5); // Remove 00505 international dialing prefix
	}

	// Limit to 8 digits for Nicaragua numbers
	digits = digits.slice(0, 8);

	const result: PhoneValidationResult = {
		isValid: true,
		errors: [],
	};

	if (digits.length !== 8) {
		result.isValid = false;
		result.errors.push('debe tener exactamente 8 dígitos');
	}

	const firstDigit = digits[0];
	if (['0', '1', '3', '4'].includes(firstDigit)) {
		result.isValid = false;
		result.errors.push('no puede empezar con 0, 1, 3 o 4');
	}

	return result;
};

export interface TimeValidationResult {
	isValid: boolean;
	error?: string;
}

export const validateTime = (time: string, selectedDate?: Date): TimeValidationResult => {
	if (!time) {
		return { isValid: false, error: 'La hora es requerida' };
	}

	let time24 = time;

	// If it's not already in 24h format (HH:MM), try parsing as 12h
	if (!/^\d{2}:\d{2}$/.test(time)) {
		const parsed = parse12HourTime(time);
		if (parsed) {
			time24 = parsed;
		} else {
			return { isValid: false, error: 'Formato de hora inválido' };
		}
	}

	const [hours, minutes] = time24.split(':').map(Number);
	if (isNaN(hours) || isNaN(minutes)) {
		return { isValid: false, error: 'Formato de hora inválido' };
	}

	if (selectedDate && selectedDate.getDay() === 0) {
		return { isValid: false, error: 'Estamos cerrados los domingos' };
	}

	const isSaturday = selectedDate?.getDay() === 6;
	if (isSaturday) {
		if (hours < 9 || hours > 15 || (hours === 15 && minutes > 30)) {
			return {
				isValid: false,
				error: 'Los sábados cerramos a las 4:00 PM, última cita a las 3:30 PM',
			};
		}
	} else {
		// Monday-Friday: 8:30 AM - 5:30 PM (08:30 - 17:30)
		if (hours < 8 || hours > 17 || (hours === 17 && minutes > 30)) {
			return {
				isValid: false,
				error: 'Horario fuera de nuestro horario de atención (8:30 AM - 5:30 PM)',
			};
		}
	}

	// Check if time is in the past for today
	if (selectedDate) {
		const today = new Date();
		const isToday = format(selectedDate, 'yyyy-MM-dd') === format(today, 'yyyy-MM-dd');

		if (isToday) {
			const now = new Date();
			const currentHours = now.getHours();
			const currentMinutes = now.getMinutes();

			if (hours < currentHours || (hours === currentHours && minutes <= currentMinutes)) {
				return {
					isValid: false,
					error: 'Este horario ya pasó para hoy',
				};
			}
		}
	}

	return { isValid: true };
};

export function formatTo12Hour(time24: string): string {
	const [hours, minutes] = time24.split(':').map(Number);
	const period = hours >= 12 ? 'PM' : 'AM';
	const hours12 = hours % 12 || 12;
	return `${hours12}:${minutes.toString().padStart(2, '0')} ${period}`;
}

export function parse12HourTime(time12: string): string {
	if (!time12) return '';

	const cleaned = time12.toUpperCase().replace(/\s+/g, ' ').trim();

	// Handle pure AM/PM (default to 12:00)
	if (cleaned === 'AM' || cleaned === 'PM') {
		return cleaned === 'AM' ? '00:00' : '12:00';
	}

	const ampmMatch = cleaned.match(/(AM|PM)$/);
	const ampm = ampmMatch ? ampmMatch[1] : '';

	const timePart = cleaned.replace(/(AM|PM)$/, '').trim();
	const [hours, minutes] = timePart.split(':').map(s => parseInt(s) || 0);

	if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
		return '';
	}

	if (!ampm) {
		// No AM/PM specified, assume 24-hour format or infer from context
		return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
	}

	// Convert 12-hour to 24-hour
	let hours24 = hours;
	if (ampm === 'AM') {
		if (hours === 12) hours24 = 0;
	} else {
		// PM
		if (hours !== 12) hours24 += 12;
	}

	return `${hours24.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}

export const formatPhoneForMessaging = (phone: string): string => {
	if (!phone) return '';

	// Remove all non-digit characters
	let digits = phone.replace(/[^\d]/g, '');

	// Remove Nicaragua country code if present to avoid duplication
	if (digits.startsWith('505')) {
		digits = digits.slice(3);
	} else if (digits.startsWith('00505')) {
		digits = digits.slice(5);
	}

	// Add Nicaragua country code for E.164 format
	return `+505${digits}`;
};
