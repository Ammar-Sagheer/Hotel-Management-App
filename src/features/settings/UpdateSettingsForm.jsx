import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import { useSettings } from './useSettings';
import Spinner from '../../ui/Spinner';

import { useUpdateSetting } from './useUpdateSetting';

function UpdateSettingsForm() {
  const { isLoading, settings = {} } = useSettings();

  const {
    minBookngLength,
    maxBookingLength,
    maxGuestPerBooking,
    breakfastPrice,
  } = settings;

  const { isUpdating, updateSetting } = useUpdateSetting();

  if (isLoading) return <Spinner />;

  function handleUpdate(e, field) {
    const { value } = e.target;

    if (!value) return;
    updateSetting({
      [field]: value,
    });
  }

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          defaultValue={minBookngLength}
          id="min-nights"
          onBlur={(e) => handleUpdate(e, 'minBookngLength')}
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          defaultValue={maxBookingLength}
          id="max-nights"
          onBlur={(e) => handleUpdate(e, 'maxBookingLength')}
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          defaultValue={maxGuestPerBooking}
          id="max-guests"
          onBlur={(e) => handleUpdate(e, 'maxGuestPerBooking')}
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          defaultValue={breakfastPrice}
          id="breakfast-price"
          onBlur={(e) => handleUpdate(e, 'breakfastPrice')}
          disabled={isUpdating}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
