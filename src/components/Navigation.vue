<template>
    <header>
        <nav class="fixed left-0 right-0 top-0 z-50 bg-blue-900 shadow">
            <div class="relative flex items-center justify-between h-16 box-content mx-auto px-4">
                <div class="relative z-50 flex items-center md:hidden">
                    <button type="button" @click="$route.params.tourId ? $router.go(-1) : menuOpen = !menuOpen" class="inline-flex items-center justify-center rounded-md text-gray-300 focus:outline-none">
                        <svg v-if="$route.params.tourId" class="h-6 w-6 fill-current" viewBox="0 0 16 16">
                            <path d="M16 7H3.8l5.6-5.6L8 0 0 8l8 8 1.4-1.4L3.8 9H16V7z"/>
                        </svg>
                        <svg v-else class="h-8 w-8" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path :class="{'hidden': menuOpen, 'inline-flex': !menuOpen }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            <path :class="{'hidden': !menuOpen, 'inline-flex': menuOpen }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="relative z-50 flex-shrink-0 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 fill-current" viewBox="0 0 278.901 167.496"><path d="M56.25 103.618l3.92-3.92v-18.84H42.29v7.94h9.99v6.87H32.47v-23.84h19.81v3.97h7.89v-7.89l-3.92-4.03H28.44l-3.92 4.03v31.79l3.92 3.92zm10.73-15.84h15.84v-7.95H66.98zm42.81 15.84v-31.79h13.79v-7.95H87.93v7.95h13.91v31.79zm28.55-7.95v-23.84h19.82v23.84zm23.79 7.95l3.92-3.92v-31.79l-3.92-4.03h-27.82l-3.92 4.03v31.79l3.92 3.92zm12.43-39.74v35.82l3.92 3.92h27.82l3.91-3.92v-35.82h-7.89v31.79h-19.81v-31.79zm52.12 19.93v-11.98h19.81v11.98zm27.7 19.81v-7.95l-3.92-3.91 3.92-3.98v-19.87l-3.92-4.03h-31.73v39.74h7.95v-11.86h11.86l3.98 3.91 3.97 4.03v3.92z" xmlns:name="main_text" fill="#fff"/><g transform="scale(2.1)" xmlns:name="outlineContainer_mainfill" fill="#fff"><g data-name="Слой 2"><g data-name="Layer 1"><path d="M102.1 61.31c-.11.13 0 .44.25.2.12-.13.04-.44-.25-.2zM132.37 60.47h-.17l.16.14s.01-.09.01-.14zM19.12 18.77h.6a.94.94 0 0 1 .32-.6c-.33-.17-.62.27-.92.6zM22.5 18.77a1.21 1.21 0 0 1-.46-1c.68-.08 2.3.62 1.08-.75.94-.24.83 1 .81 1.71h2.77a2.28 2.28 0 0 1 .31-.86c.51.26.36.56.16.86h105.2a5.6 5.6 0 0 1 .07-.59l.21-1.3H88.54L66.33 0 44.12 16.88H25.19a1 1 0 0 0 .2.47c-.59.09-.75-.13-.78-.47h-2.72a4.62 4.62 0 0 1-.47 1.89zm39-.34c-.23.71-1.36-.21-.72-.63.33-.22.8.36.72.63zm2.48.05a.88.88 0 0 1 1.13.14.86.86 0 0 1-1.11-.14zm3.52-1.15c0-.23.44-.15.45 0s-.44.13-.45 0zm-5.57-12c0 .23-.44.15-.44 0s.43-.12.44.01zm-8.65 7.94a.94.94 0 0 1 .4-.39h.06l.64-.48c-.29 0-1.14.08-.28 0h.32l7.8-5.93a3.33 3.33 0 0 0-.46-.47c.14-.23.53-.07.8.2l3-2.24a1.29 1.29 0 0 1 .81-.28 1.26 1.26 0 0 1 .8.28l17 12.9H48.54z"/><path d="M.29 18.77H19c.26-1-1.25-1.12-1.29-1.79.28-.24.61.18.93.39a3.38 3.38 0 0 1 2.24-.16 1 1 0 0 1 .05-.33h-3.7a1.85 1.85 0 0 1-.42.17v-.17H0l.21 1.3c.03.19.06.39.08.59zm12.51-1c0 .23-.43.15-.44 0s.44-.11.44.01zM63.42 77.58l.43.33a.55.55 0 0 0-.43-.33zM59.32 74.21c0 .12.46.2.45 0s-.47-.21-.45 0zM72.91 62.45a3.24 3.24 0 0 1-.19.46h.62a1.21 1.21 0 0 1-.43-.46zM97.8 60.93a1.84 1.84 0 0 0 0-.25h-.36a2.27 2.27 0 0 1 .36.25zM94.94 60.68h-1a2.15 2.15 0 0 0 1 0z"/><path d="M69.77 73.81l-.59.45a.59.59 0 0 1 .06.16l-1 1.2c.07-.28 0-.42-.15-.5l-.92.7a1.35 1.35 0 0 1-1.24.2c-.1.22-.17.45.13.65-1.19.42-1.4-.86-1.66-1.73l-.29-.22c-1.36-.22-2.83-2-4.19-2.13-.24 1.08.4.84 1.23 1.49-.34.56-.7.71-1.1.31a1.67 1.67 0 0 0 .42.92l1.67 1.27a.93.93 0 0 1 1 .52 1 1 0 0 1-.19.12l.3.22c.38-.6.84 0 1.24-.44.5.57-.28 1.22.57 1.76H65l1.36 1 6.45-4.9c0-.32.3-.65.25-1a14.31 14.31 0 0 1-3.29-.05zm-8.54 2.06a.88.88 0 0 1 .15-1.13 2.07 2.07 0 0 1 1.41.8c-.46.95-1.06-.04-1.56.33zm8.52-.59l-.62.72c-1.01-.26.23-1.68.62-.72zm-2 .37l.48.41-.42.48-.48-.42zM65 78.31c.21-.22.45.07.69.18-.2.23-.45-.07-.69-.18zm.51.87c.21-.23.45.07.69.18-.2.22-.45-.07-.68-.18zm1-1.2c-.23-.21.07-.46.18-.68-.17-.23-.31-.11-.45 0-.4-.93 1.14-.5 1.58.12-.36.49-.82-.25-1.26.58zm1.28-1c1-.48 1.84-1.71 2.87-.88-.89.49-1.78 1.73-2.82.9zm2.6-1.53c.21-.23.45.07.68.18-.15.23-.4-.06-.63-.17zM132.09 61.69c0 1-.29.21-.87.51-.42-.54 1-1.2.44-1.73h-1.53a1.49 1.49 0 0 0 0 .21H118.3a.83.83 0 0 1 .21.16c-.67.49-1.6 1.34-2.41 2.07h1.72c-.06-.22-.37-.42-.56-.63.29-.22.62.25.9-.07 0 .2.07.45.09.7h.44c-.12 0-.13-.19 0-.28.28-.23.35.07.24.21a.31.31 0 0 1-.16.07h3.14c0-.23.44-.16.45 0a.11.11 0 0 1-.05.09h1.09a.94.94 0 0 1 1-.45c.19.14.16.29.06.45h1a1.23 1.23 0 0 1 .56-.33 1.09 1.09 0 0 1 .18.33h5.45c.19-.16.29-.07.29 0h.87l-.16-1a.59.59 0 0 1-.56-.31zm-12.41-.26c.21-.23.46.07.69.18-.21.22-.45-.07-.69-.18zm1.86.77c-1.14.49-.23-1.17.38-.93 1.29-.13-1.1.43-.38.93zm2.89-.43l-.47-.41.41-.49.48.42zm6-.64c0-.24.44-.16.45 0s-.4.12-.41 0z"/><path d="M80.71 61.23c-.33.1-1-.22-.66.27-.45.41-.74-.36-.77-.82H67.19a.67.67 0 0 1-.44.62 1.08 1.08 0 0 1-.26-.62H41.1a1 1 0 0 1-.2 1.3 6.16 6.16 0 0 1-.62-1.3H29.63c.12.49-.88 1-1.14 1-.41-.31.14-.69.52-1h-1.34l-.59.24a1.34 1.34 0 0 1-.12-.24H2.54v-.21H.29v.24a5.51 5.51 0 0 1-.1.91L0 62.91h22.63c-.28-.11-.58-.53-.86-.71.42-.38.88-.19 1.37.35a.58.58 0 0 1-.28.36h16.43a2.21 2.21 0 0 1-1.08-.74.91.91 0 0 1 .89-.06c.42-.48-.38-.88.36-1.38a1.51 1.51 0 0 1 .19 2.18h1.23l-.16-.24c.81-.58.52-1.08 1-1.64.69.47.5 1-.12 1.58a1 1 0 0 0 .28.3h2.22l9.61 7.3c.08 0 .14.05.14.1l1.09.83a.73.73 0 0 0-.16-.45c.47-.76 1.09.55 1.59.11.32.31-.36.56-.86.77l3 2.28a1.21 1.21 0 0 1 0-1.62c.4.69 1.4.62.45 0a2.08 2.08 0 0 1 .79-.78l-.26-.2c-.84.53-1.63 1.73-2.56.89.47-.68 1-1 1.55-.33.61-.9-1.48-.17-.3-1.1-.58-.83-1 .25-1.61-.57-.47-.22-.87.58-1.38-.35.45 0 .84-.82 1.34-.1.32-.46-.6-.84-.77-1.27l-7.22-5.49h10.15a.56.56 0 0 0-.19-.36.32.32 0 0 1 .5.36h2.07a1.21 1.21 0 0 0-.07-.33c.47-.34.49 0 .57.31h5.91l.07-.09a.41.41 0 0 1 0 .09H70c0-.23.44-.16.45 0s0 0 0 .06h.66c-.46-.84 2 .14.66-1.06a2 2 0 0 0 1.28-1c.66.22.4.87.75 1.08 1.19.69 2.38-.17 3.13 1h1.48a5.63 5.63 0 0 1 1.08-.24l.25.24h1.83c-.05-.53-.47-1.42-1-.55-.57-.55.63-.87.83-1s.1-.3 0-.44c.53-.18.3.37 1.17.59-.27.45-.59.22-.87.51a1.47 1.47 0 0 1 .93.39c.63-.74 1.23-1.7 2-.82-.52.07-.63.32-.17.69a4.52 4.52 0 0 0-1.56.59h1.29l-.5.38a.4.4 0 0 0 .38 0c.11.33-.22 1 .27.65.45.84-1.33 1.31-1.1.31-.41.4-.15.76-.6 1.17.33.44.62.2.9-.07.61.92-.26.72-.83 1a4.16 4.16 0 0 0-.37 1.41l2.6-2s.13-.15.26-.13l.79-.6c-.36.2-.17-.23-.45-.43a.32.32 0 0 1 .48.4l2.62-2H90a17.68 17.68 0 0 0 2.52-2.23H81a.6.6 0 0 0-.29.42zm-61.9.5c0-.24.44-.16.44 0s-.43.12-.44 0zm16.05.9c.21-.23.45.07.69.18-.21.19-.46-.07-.69-.18zM57.51 71c0 .23-.44.15-.45 0s.44-.17.45 0zm-2.84-2.1c1.31.12-1.28.3 0 0zM44 61.31c0-.23.44-.15.45 0s-.45.13-.45 0zm21.44.53c.2-.22.45.07.69.18-.22.23-.46-.02-.69-.18zm1.61.57a.87.87 0 0 1 .15-1.14.89.89 0 0 1-.15 1.14zm2.39-1.3c0 .24-.44.16-.45 0s.44-.11.45 0zm-1 1.2c.49-.37 1-1 1.54-.33-.51.69-.98.96-1.58.33zm10.54-.51c0-.23.44-.16.45 0s-.43.12-.49 0zm8.17.78c1.31.12-1.28.3 0 0zm-1.2-1l.72.62c-.15.83-1.41.37-.84 1-.63.3-.9-1.2.08-1.66zM101.07 62.5c.59.77 1-.36 1.13.41h.24c.96-1.02-1.02-.79-1.37-.41z"/><path d="M118 60.68h-4c-.14.17-.3.33-.42.5a2.65 2.65 0 0 0-.31-.5h-.36a1 1 0 0 1-.67.59c-.23-.07-.15-.34 0-.59h-.47a1.07 1.07 0 0 1-.24.42 1.2 1.2 0 0 1-.51-.42h-.92l.06.06a.5.5 0 0 1-.6-.06h-.71a.2.2 0 0 1 0 .16c-.25.21-.33 0-.26-.16h-4.66c-.73.8-1.48 1.63-.19 1.19-.31.17-.58.84-.89 1h4.48a2 2 0 0 1 1.88 0h.44c1-.67.65-.93.79-2 .77.12.6.73 1.64 1a2.17 2.17 0 0 0-1.26.95h4.43a7.47 7.47 0 0 1 2.84-2 .32.32 0 0 1-.09-.14zm-8.64 1.47c-.45.26-.26-.2 0-.45.43-.26.24.2.01.45zm3.86.41c0-.24.44-.16.45 0s-.43.12-.44 0zm1.11-.31c0-.23.43-.15.44 0s-.43.13-.43 0zm.89-.06l-.48-.42a1.47 1.47 0 0 1 .39-.92l.71.62zM99.1 60.68c-.27.17-.55.3-.37.64 1-.28 2-.34 3-.64zM71.35 62.91h.13s-.03-.04-.13 0zM65.42 75.75h-.06a1.49 1.49 0 0 0-.06.34c.2.81.19-.09.12-.34zM60.54 72.32c0-.12-.47-.2-.45 0s.46.23.45 0zM74.22 71.59c-.42.62.94 1.07 1.17.59a2.06 2.06 0 0 1 0 .76l.67-.51.06-.07 1-.76c-.29-.11-.56-.06-.86-.39.02 1.18-1.34.26-2.04.38zM80.15 66.22c.85-.26.9 0 1.29-1l-.17-.15-.34.26a1.3 1.3 0 0 1-.78.59l-.5.38c.13.51.29 1 .57.81.21 1-1 .7-1.14-.15a.48.48 0 0 0-.29 0l-1.67 1.27.26.21a.92.92 0 0 1-.68.11l-.35.26c.1.34-.7 1.32-1.12 1.13l.48.42c-.48.2-.64-.08-.81-.44l-.86.65a1.29 1.29 0 0 0 .36.33c1.2-.07 2.34-.89 3.55-.7a.57.57 0 0 1 .17.63l1.63-1.24a4.21 4.21 0 0 1-.51-.38c.21-.15.44 0 .66-.27l.33.29.8-.61c.59-.76.33-1.79 1.19-1.87-.76-1.26-1.34.25-2.07-.53zm-1.57 3.26c0-.23.44-.15.45 0s-.44.13-.45 0zm.39-.92c.25-.07-.58-.84-.49-.42-.07-.29 0-.37.21-.24-.02-.02 1.16.43.31.66zm1.1-.31c0-.23.44-.15.45 0s-.44.13-.45 0zM82.91 63.83l-.92.7a2 2 0 0 0 .92-.7z"/><path d="M77.09 70.72c0 .12.46.19.45 0s-.47-.24-.45 0zM66.12 7.61l-8.93 6.45h17.87zm-2.25 3.48c-.09.26-.18 0-.17-.18s.18-.01.17.18zm-3.48.91c-.09-.1.13-.23.18-.18s-.13.18-.18.18zm.7.17c0-.17.21-.14.35-.17-.01.12-.22.09-.35.13zm1.39 1c.09-.27.18 0 .17.17s-.18.01-.17-.17zm1-.87c-.56-.1-.81.12-1.21.18 0-.21 0-.32-.18-.35s-.16.06-.17.17c-.47-.53 1.45-.16 1.21-1 .09.61 1.37 0 1.22.87-.22-.32-.86-.65-.83.13zm1-.17c0-.2.18-.1.18 0s-.1.09-.1 0zm2.61 1.73c0-.19.17-.09.17 0s-.09.14-.09 0zm0 57.54v.28l.29-.21a.22.22 0 0 0-.21-.07zm-.52.66l.13-.09h-.13c.06.03.08.03.08.09zm1.74-5.18a7.13 7.13 0 0 1-.74-.89H57.19l6.56 4.74h.12a.07.07 0 0 1 0 .1l1.48 1.07c.21-.16.42-.42.44-.13s0 .35 0 .43l.34.24c.07-.23-.2-.41-.14-.84a3 3 0 0 1 2.26-.7l1.84-1.32a.65.65 0 0 0-.11-.12c0-.08.14-.07.27 0L75.06 66H68c.12.27.26.57.39.88zM63 68.61c.09-.26.18 0 .17.18s-.17.01-.17-.18zm.87-.34a.18.18 0 0 1 .35 0c-.08.25-.16-.02-.35 0zm1.22 2.6c-.42.58-.83-.48 0 0zm1.21-3.47c0-.22.35-.17.35 0-.16.11-.31.21-.35 0zm.18-.52c-.1-.09.12-.22.17-.18s-.12.22-.17.18zM71 68.09c.09.09-.13.23-.18.18s.18-.22.18-.18zm-.35-.17c.09.09-.13.22-.17.17s.12-.22.17-.17zm-.53.87c0 .2-.17.1-.16 0s.17-.1.16 0zm-.52-.52c-.07.25-.15 0-.34 0a.17.17 0 0 1 .34 0z"/></g></g></g></svg>
                </div>
                <div
                    :class="{'block': menuOpen, 'hidden': !menuOpen}"
                    class="fixed md:static inset-0 z-40 h-screen md:h-auto pt-16 md:pt-0 px-4 md:flex md:items-center"
                >
                        <picture class="absolute md:hidden inset-0 z-40 overlay">
                            <img class="w-full h-full object-cover" :src="mainMenuBg" alt="Menu Background">
                        </picture>
                        <span class="absolute md:hidden inset-0 z-40 overlay"></span>
                    <router-link to="/"><span @click="menuOpen = false" class="relative z-50 flex items-center px-3 py-2 rounded-md text-base md:text-sm font-medium text-white bg-blue-800 focus:outline-none md:bg-transparent">
                            <svg class="w-6 h-6 mr-2 md:w-4 md:h-4 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g><path d="M22 9c-.062 2.675-2.07 4.934-2.07 4.934C19.93 8.958 16 5 16 5s-.053 2.962-2.043 5.948C11.967 3.981 5.995 0 5.995 0 8.981 10.948 5 14.93 5 22.892 5 27.563 8.954 32 15 32c8.957 0 10.689-3.288 11.615-6.993C27.891 19.906 25.98 13.976 22 9zm2.676 15.521C24.033 27.09 23.307 30 15 30c-5.008 0-8-3.614-8-7.108 0-2.676.488-4.873 1.004-7.199.656-2.949 1.328-5.968 1.037-9.961 3.084 4.269 4.182 9.925 4.182 9.925s2.871-4.031 3.643-5.903C17.457 10.957 18 15 18 19c0 0 2.656-2.188 4.648-5.478 2.098 3.762 2.854 7.695 2.028 10.999z"/><path d="M22.432 16.795l-.85.985c-1.053 1.228-2.049 2.392-4.708 3.73-.381-1.142-.727-2.399-.727-4.323v-1.709l-1.518 2.378c-.512.811-.936 1.483-1.568 2.376-.959-2.162-1.637-3.761-2.152-5.212l-.479-1.35-.52 1.51c-.66 1.921-1.285 3.735-1.285 8.444a.5.5 0 1 0 1 0c0-3.609.359-5.396.84-6.941.52 1.322 1.176 2.825 2.037 4.75l.352.784.508-.692c.83-1.13 1.324-1.89 1.865-2.743.158 1.479.523 2.54.885 3.59l.182.528.506-.239c2.703-1.284 3.968-2.453 4.972-3.575.156 1.864-.09 3.904-.674 5.353a.499.499 0 0 0 .465.686.499.499 0 0 0 .463-.313c.775-1.924 1.008-4.664.592-6.982l-.186-1.035z"/></g></svg>
                            Горячие туры
                        </span></router-link>
                    <router-link to="/popular"><span @click="menuOpen = false" class="relative z-50 flex items-center mt-1 md:mt-0 px-3 py-2 rounded-md text-base md:text-sm font-medium text-white bg-blue-800 focus:outline-none md:bg-transparent">
                            <svg class="w-6 h-6 mr-2 md:w-4 md:h-4 fill-current" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M233.47 185.853c-.2.068-20.224 7.045-41.258 23.898-23.531 18.855-38.895 41.912-45.822 68.699 15.244-27.171 40.302-48.147 70.351-58.065a125.046 125.046 0 0 1 11.064-3.086l.002-.001a126.46 126.46 0 0 1 17.311-2.743c3.75-.327 7.476-.493 11.075-.493 7.997 0 16.071.776 23.997 2.309 40.103 7.75 73.622 34.438 90.396 71.061a116.923 116.923 0 0 0 2.102-22.111c0-33.334-14.332-65.138-39.322-87.257-.68-.603-1.367-1.194-2.059-1.779-.423-.357-.854-.707-1.281-1.059-.259-.212-.514-.427-.773-.637-.615-.496-1.237-.984-1.861-1.467l-.195-.153a116.277 116.277 0 0 0-45.059-21.221c-.733-.167-1.469-.329-2.206-.482-.264-.055-.529-.104-.794-.157a121.13 121.13 0 0 0-5.004-.891 114.29 114.29 0 0 0-3.874-.535c-.225-.026-.447-.059-.672-.084a113.694 113.694 0 0 0-3.191-.317c-.125-.001-.249.007-.375-.004a120.428 120.428 0 0 0-9.399-.441c-.204-.002-.411-.007-.615-.007l-.712.008h-.017l-.007.001c-.029-.001-.098.001-.102.001h-.018c-.696.007-1.417.019-2.136.038l-.089.003a118.784 118.784 0 0 0-3.697.164c-1.096.064-2.184.141-3.254.233-59.596 5.177-106.279 56.149-106.279 116.044 0 .966.013 1.93.037 2.894 10.29-31.256 30.291-52.684 46.917-65.948 22.279-17.776 42.938-24.937 43.807-25.231a4.658 4.658 0 0 1 3.012 8.816zM217.214 113.406l.195.041c1.053.204 2.086.419 3.085.646a106.581 106.581 0 0 1 3.833.957c10.17 2.728 19.715 6.956 28.492 12.622.212.137.423.273.634.411.808.53 1.61 1.068 2.403 1.622.048.033.097.064.145.098.121-.085.245-.163.367-.247.879-.609 1.762-1.208 2.657-1.787l.14-.094a100.444 100.444 0 0 1 3.507-2.155c.955-.563 1.917-1.112 2.89-1.643l.256-.136a99.115 99.115 0 0 1 2.764-1.438l.65-.325c.989-.486 1.984-.959 2.988-1.413l.481-.212c.908-.405 1.824-.795 2.745-1.174.195-.08.391-.162.587-.241a94.56 94.56 0 0 1 3.096-1.188c.205-.075.41-.146.616-.22a96.947 96.947 0 0 1 2.871-.98c.106-.035.211-.074.317-.108C264.604 74.291 222.28 46.31 176.045 46.31c-7.456 0-14.85.704-22.104 2.1 28.336 12.964 50.891 35.992 63.273 64.996z"/><path d="M173.592 170.092c13.592-11.737 29.794-20.565 46.952-25.567a125.524 125.524 0 0 1 22.997-4.409 100.753 100.753 0 0 1 4.711-4.295c-.271-.178-.54-.357-.813-.531a91.876 91.876 0 0 0-34.325-13.151 92.132 92.132 0 0 0-15.176-1.266c-43.103 0-79.898 29.395-89.483 71.481a92.393 92.393 0 0 0-2.11 14.445c16.624-20.382 40.825-33.75 67.247-36.707zM403.543 192.354c-9.585-42.091-46.383-71.487-89.484-71.487a92.428 92.428 0 0 0-23.663 3.098v.001a93.071 93.071 0 0 0-3.955 1.148c-.409.128-.813.269-1.221.402-.897.294-1.792.598-2.678.919-.468.17-.934.346-1.398.523-.831.316-1.657.646-2.478.986-.458.189-.915.379-1.369.575a94.36 94.36 0 0 0-2.591 1.18c-.376.178-.754.347-1.127.529a89.434 89.434 0 0 0-3.605 1.856c-.145.079-.285.166-.43.246a90.07 90.07 0 0 0-3.097 1.791c-.39.235-.773.483-1.16.725-.509.319-1.013.648-1.516.978.076.065.149.134.225.199.083.07.167.139.249.21.02.016.038.03.057.047.383.332.757.676 1.136 1.014.372.333.744.665 1.109 1.003.147.135.299.268.445.403.271.254.537.516.807.772.223.212.452.418.672.632.176.017.351.041.526.059.865.089 1.729.186 2.591.292.399.049.8.098 1.198.15a131.507 131.507 0 0 1 4.672.713c.554.095 1.108.188 1.661.289.692.128 1.383.267 2.074.405a124.778 124.778 0 0 1 3.383.73 125.22 125.22 0 0 1 13.601 3.948 124.964 124.964 0 0 1 34.452 18.705l.491.377c.537.416 1.071.838 1.602 1.263.268.215.535.429.802.646.44.358.879.721 1.315 1.087.336.281.672.563 1.006.849.187.16.377.315.563.476 26.423 2.957 50.622 16.325 67.246 36.707a92.509 92.509 0 0 0-2.111-14.446zM381.814 456.37H283.05l-1.698-47.548c-.78.589-1.74.95-2.793.95h-27.958a4.66 4.66 0 1 1 0-9.319h27.958c.931 0 1.793.279 2.521.75l-4.354-121.904h-26.125a4.66 4.66 0 0 1 0-9.319h25.792l-1.611-45.097-.441-.069a119.465 119.465 0 0 0-4.153-.584l-.052-.007a117.731 117.731 0 0 0-4.179-.42c-.259-.021-.519-.045-.778-.065a116.027 116.027 0 0 0-4.802-.271 114.69 114.69 0 0 0-4.185-.085c-3.33 0-6.784.154-10.265.458-1.23.107-2.463.24-3.695.389-.387.047-.773.102-1.16.151-.854.112-1.709.23-2.563.361a109.826 109.826 0 0 0-3.804.649c-.418.078-.836.153-1.253.236-.191.038-.381.083-.572.122l-18.209 100.149h26.611a4.66 4.66 0 0 1 0 9.319h-27.959c-.117 0-.227-.025-.341-.034l-15.257 83.91h24.917a4.66 4.66 0 0 1 0 9.32h-26.611l-5.083 27.958h-79.402a4.66 4.66 0 0 0 0 9.32h270.269a4.66 4.66 0 1 0-.001-9.32z"/></svg>
                            Популярные направления
                        </span></router-link>
                    <router-link to="/search"><span @click="menuOpen = false" class="relative z-50 flex items-center mt-1 md:mt-0 px-3 py-2 rounded-md text-base md:text-sm font-medium text-white bg-blue-800 focus:outline-none md:bg-transparent">
                            <svg class="w-6 h-6 mr-2 md:w-4 md:h-4 fill-current" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M306.39 154.09c19.628 4.543 35.244 21.259 39.787 39.523 1.551 8.54 8.998 14.989 17.904 14.989 9.991 0 18.168-8.175 18.168-18.17 0-13.083-10.991-32.98-25.985-47.881-14.719-14.537-32.252-24.802-46.695-24.802-9.991 0-18.172 8.45-18.172 18.446-.001 8.899 6.45 16.351 14.993 17.895zM56.629 392.312c-14.09 14.08-14.09 36.979 0 51.059 14.08 14.092 36.981 14.092 50.965 0l104.392-104.303c24.347 15.181 53.062 23.991 83.953 23.991 87.857 0 158.995-71.142 158.995-158.999 0-87.854-71.138-158.995-158.995-158.995-87.856 0-158.995 71.141-158.995 158.995 0 30.802 8.819 59.606 23.992 83.953L56.629 392.312zM182.371 204.06c0-62.687 50.875-113.568 113.568-113.568s113.569 50.881 113.569 113.568c0 62.694-50.876 113.569-113.569 113.569S182.371 266.754 182.371 204.06z"/></svg>
                            Подбор тура
                        </span></router-link>
                    <router-link to="/about"><span @click="menuOpen = false" class="relative z-50 flex items-center mt-1 md:mt-0 px-3 py-2 rounded-md text-base md:text-sm font-medium text-white bg-blue-800 focus:outline-none md:bg-transparent">
                            <svg class="w-6 h-6 mr-2 md:w-4 md:h-4 fill-current" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M64 32a32 32 0 1 0-32 32 32 32 0 0 0 32-32zm-5.57 0A26.43 26.43 0 1 1 32 5.57 26.45 26.45 0 0 1 58.43 32z"/><path d="M28.52 12.19h6.96v6.96h-6.96zM35.48 44.39v-20.5h-9.83v6.96h3.23v13.54h-3.23v6.96h12.7v-6.96h-2.87z"/></svg>
                            Информация
                        </span></router-link>
                    </div>
                <div class="relative z-50 flex items-center">
                    <button type="button" @click="openUser = !openUser" class="flex text-sm text-gray-300 border-2 border-transparent rounded-full focus:outline-none">
                        <svg class="h-8 w-8 rounded-full fill-current stroke-current" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="25" fill="none" r="24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><path fill="none" d="M0 0h50v50H0z"/><path d="M29.933 35.528c-.146-1.612-.09-2.737-.09-4.21.73-.383 2.038-2.825 2.259-4.888.574-.047 1.479-.607 1.744-2.818.143-1.187-.425-1.855-.771-2.065.934-2.809 2.874-11.499-3.588-12.397-.665-1.168-2.368-1.759-4.581-1.759-8.854.163-9.922 6.686-7.981 14.156-.345.21-.913.878-.771 2.065.266 2.211 1.17 2.771 1.744 2.818.22 2.062 1.58 4.505 2.312 4.888 0 1.473.055 2.598-.091 4.21-1.261 3.39-7.737 3.655-11.473 6.924 3.906 3.933 10.236 6.746 16.916 6.746s14.532-5.274 15.839-6.713c-3.713-3.299-10.204-3.555-11.468-6.957z"/></svg>
                    </button>
                    <div :class="{'hidden': !openUser, 'block': openUser }" class="absolute top-0 right-0 z-30 w-48 mt-12 rounded-md shadow-lg">
                        <div class="py-1 rounded-md bg-white shadow-xs">
                            <router-link to="/registration">
                                <span @click="openUser = !openUser" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
                                    Регистрация
                                </span>
                            </router-link>
                            <router-link to="/login">
                                <span @click="openUser = !openUser" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
                                    Вход
                                </span>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
import mainMenuBg from '@/assets/menu_bg.jpg';
export default {
    name: 'Navigation',
    data() {
        return {
            mainMenuBg,
            menuOpen: false,
            openUser: false,
        }
    },
};
</script>

<style scoped>
    span.overlay {
        background: linear-gradient(to bottom, #2a4365 0%, #2a4365 45%, #2a4365 0%, transparent 100%);
    }
</style>
