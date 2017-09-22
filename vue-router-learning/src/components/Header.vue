<template>
    <!-- <ul class="nav nav-pills">

            <router-link to="/" tag="li" active-class="active" class="nav-item"  exact>
                <a class="nav-link">Home</a>
            </router-link>

            <router-link to="/User" tag="li" active-class="active">
                <a class="nav-link">User</a>
            </router-link>

        </ul> -->

    <ul class="nav nav-pills">
        <li class="nav-item">
              <router-link to="/" active-class="active" exact>
                <a class="nav-link">Home</a>
            </router-link>
        </li>
        <li class="nav-item">
             <router-link to="/User" active-class="active">
                <a class="nav-link">User</a>
            </router-link>
        </li>
    </ul>
</template>
