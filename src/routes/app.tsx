import { DatePickerWithRange } from "@/components/date-range-picker";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate, createFileRoute } from "@tanstack/react-router";
import type { DateRange } from "react-day-picker";
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormLabel } from "@/components/ui/form";

export const Route = createFileRoute("/app")({
  component: App,
});

function App() {
  const navigate = useNavigate();
  const form = useForm<{ text: string; dateRange: DateRange }>();

  const onSubmit = (data: any) => {
    navigate({
      to: "/submit",
      search: data,
    });
  };

  return (
    <div className="p-5 container py-10">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="dateRange"
            render={({ field: { value, onChange } }) => (
              <FormItem>
                <FormLabel>事件發生的區間</FormLabel>
                <DatePickerWithRange date={value} setDate={onChange} />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="text"
            render={({ field }) => (
              <FormItem>
                <FormLabel>事件描述</FormLabel>
                <Input {...field} placeholder="請描述你掉的物品、地點等資訊" />
              </FormItem>
            )}
          />

          <Button type="submit" className="mt-4">
            提交
          </Button>
        </form>
      </Form>
    </div>
  );
}
