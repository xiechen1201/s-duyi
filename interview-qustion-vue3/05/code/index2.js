/* 
    <template>
        <div>{{rCount}}</div>
    </template>

    <script setup>
    import { ref } from 'vue';
    const count = 0;
    const rCount = ref(count);

    for(let i = 1; i <= 5; ++i){
        rCount.value = i;
    }
    </script>


    渲染 2 次，初始化 1 次，同步更改数据后异步渲染 1 次
*/

/* 
    <template>
        <div>{{rCount}}</div>
    </template>

    <script setup>
    import { ref } from 'vue';
    const count = 0;
    const rCount = ref(count);

    for(let i = 1; i <= 5; ++i){
        setTimeout(()=>{
            rCount.value = i;
        }, 0);
    }
    </script>

    渲染 6 次，初始化 1 次，每个 setTimeout 更新都会渲染一次
*/