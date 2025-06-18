<template>
  <div class="form-group" :class="{ 'form-row': row }">
    <label v-if="label" class="form-label">{{ label }}</label>
    <component
      :is="inputType"
      :value="modelValue"
      v-bind="$attrs"
      @input="handleInput"
      @change="handleChange"
      class="form-control"
    />
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FormGroup",
  props: {
    label: String,
    modelValue: [String, Number, Boolean, Date, Array, Object],
    inputType: {
      type: String,
      default: "input",
      validator: (value) =>
        ["input", "textarea", "select", "file"].includes(value),
    },
    row: Boolean,
  },
  emits: ["update:modelValue"],
  methods: {
    handleInput(event) {
      if (this.inputType === "file") {
        this.$emit("update:modelValue", event.target.files[0]);
      } else {
        this.$emit("update:modelValue", event.target.value);
      }
    },
    handleChange(event) {
      if (this.inputType === "select") {
        this.$emit("update:modelValue", event.target.value);
      }
    },
  },
};
</script>

<style scoped>
.form-group {
  margin-bottom: 25px;
}

.form-group.form-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

@media (min-width: 992px) {
  .form-group.form-row {
    grid-template-columns: 1fr 1fr;
  }
}

.form-label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: var(--primary);
}

.form-control {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-family: inherit;
  font-size: 1rem;
}

textarea.form-control {
  min-height: 150px;
  resize: vertical;
}
</style>
