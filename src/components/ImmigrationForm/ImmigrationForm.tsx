import { ChangeEvent } from "react";

// assets
import { theme } from "@/assets";

// project
import { FormControl, Box, FormLabel, TextField, Text, Button } from "@/ui";

// type
import type { FormValue } from "@/hooks";

interface ImmigrationFormProps {
  formValue: FormValue;
  onFormValueChangeEvent: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const ImmigrationForm = ({
  formValue,
  onFormValueChangeEvent,
}: ImmigrationFormProps) => {
  return (
    <FormControl
      sx={{
        boxShadow: theme.colors.boxShadow,
        background: "#FAFAFA",
        borderRadius: theme.border.radius.md,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: "16px",
      }}
    >
      <Box sx={{ p: "16px", display: "flex", justifyContent: "center" }}>
        <Text
          sx={{
            fontSize: "40px",
            fontWeight: theme.font.weight.fw700,
            p: "20px",
          }}
        >
          HOBOM PIN
        </Text>
      </Box>
      {Object.keys(formValue).map((formValueName: string) => (
        <Box key={formValueName} sx={{ mb: "24px" }}>
          <FormLabel
            label={formValueName.toUpperCase()}
            isRequired={formValue[formValueName].isRequired}
          />
          <TextField
            type={formValue[formValueName].type}
            placeholder={formValue[formValueName].placeholder}
            name={formValueName}
            value={formValue[formValueName].value}
            onChange={onFormValueChangeEvent}
          />
          {formValue[formValueName].isValid === false && (
            <Text sx={{ pt: "4px", color: theme.colors.red400 }}>
              {formValue[formValueName]?.errMsg}
            </Text>
          )}
        </Box>
      ))}
      <Box sx={{ pt: "16px", pb: "16px" }}>
        <Button
          fullWidth
          variant="fill"
          label="sign in"
          sx={{ height: "48px", fontSize: theme.font.size.lg }}
        />
      </Box>
      <Box sx={{ pt: "12px", pb: "12px", textAlign: "center" }}>
        <Text variant="subtitle" sx={{ cursor: "pointer" }}>
          SIGN UP
        </Text>
      </Box>
    </FormControl>
  );
};
