<template >
        <div>
            {{data.num}}<br/>
            {{data.name}}
        </div>

    

</template>
<script setup>
const props = defineProps({
    data:{
        type:Object,
        default:{}
    }
})

</script>
