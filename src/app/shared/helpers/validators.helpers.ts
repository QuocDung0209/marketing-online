import { FormControl, ValidatorFn } from "@angular/forms";

export class CustomValidators {
  static required(controlName: FormControl) {
    if (!controlName.value || typeof controlName.value === 'string' && !controlName.value.trim()) {
      return { required: true };
    }

    return null;
  }
}
