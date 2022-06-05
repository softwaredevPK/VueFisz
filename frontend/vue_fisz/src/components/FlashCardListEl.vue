<template>
    <div class="flashcard element">
        <strong class="flashcard name">{{frontText}} | {{backText}}</strong>
        <ul>
            <li class="flashcard-modify">
                <li class="edit"><img src="@/assets/edit.png" alt="edytuj"/></li>
                <li class="edit"><img src="@/assets/bin.png" alt="usuń"/></li>
            </li>
        </ul>
    </div>
</template>

<script setup>
    const props = defineProps(['frontText', 'backText'])
</script>
<style scoped>
.flashcard.element{
    border: 1px solid #c1c1c1;
    margin-bottom: 20px;
    border-radius: 25px;
    padding: 15px 15px 15px 30px;
    display: flex;
    vertical-align: middle;
    justify-content: center;
    align-items: center;
}

.flashcard strong{
    flex: 1;
}

.flashcard ul{
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
}

ul img{
    max-width: 25px;
}
</style>