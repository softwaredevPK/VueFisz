<template>
    <h2>Zestawy fiszek</h2>
    <div class="container sets">
        <router-link to="/createSet">
        <div class="set">
            <span class="set-title">+ Dodaj nowy zestaw</span>
        </div>
        </router-link>
        <!-- v-for starts here -->
        <div class="set">
            <span class="set-title">Słówka - sport</span>
        </div>
        <div class="set">
            <span class="set-title">Słówka - sport</span>
        </div>
        <div class="set">
            <span class="set-title">Słówka - sport</span>
        </div>
        <div class="set">
            <span class="set-title">Słówka - sport</span>
        </div>
        <div class="set">
            <span class="set-title">Słówka - sport</span>
        </div>
    </div>
</template>


<script>
export default {
    name: 'Dashboard',
}
</script>

<style>
.sets{
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(4,1fr);
}

.sets a{
    text-decoration: none;
    color: #000;
}
.set{
    padding: 40px 30px 15px 15px;
    border: 1px solid #c1c1c1;
    border-radius: 20px;
    box-shadow: 0px 0px 3px #c1c1c1;
    font-size: 21px;
    min-height: 100px;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    position: relative;
}

.set::after{
    width: 75px;
    display: block;
    content: "";
    position: absolute;
    right: 0px;
    bottom: 0;
    background-size: cover;
    height: 70px;
    background-image: url("@/assets/notepad-bg.png");
}

.set:hover{
    box-shadow: 0px 0px 3px #494949;
}

.sets .set .set-title{
    max-width: 140px;
}

</style>