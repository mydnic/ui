<template>
    <div class="px-2 py-20 bg-gray-50">
        <div class="container mx-auto space-y-20">
            <UiPageTitle>
                Mydnic UI
            </UiPageTitle>
            <div class="space-y-4">
                <UiSectionTitle>
                    Navigation
                </UiSectionTitle>

                <UiNavigationMenu>
                    <template #logo>
                        <img src="https://mydnic.be/img/logo.png" class="w-auto h-10">
                    </template>
                    <template #links>
                        <a href="/" class="navigation-link active">Dashboard</a>
                        <a href="/" class="navigation-link">Calendar</a>
                        <a href="/" class="navigation-link">Team</a>
                        <a href="/" class="navigation-link">Yow</a>
                    </template>

                    <template #right>
                        <UiInput name="search" placeholder="Chercher" />
                    </template>
                </UiNavigationMenu>

                <UiNavigationMenu full-width dark>
                    <template #logo>
                        <img src="https://mydnic.be/img/logo.png" class="w-auto h-10">
                    </template>
                    <template #links>
                        <a href="/" class="navigation-link active">Dashboard</a>
                        <a href="/" class="navigation-link">Calendar</a>
                        <a href="/" class="navigation-link">Team</a>
                        <a href="/" class="navigation-link">Yow</a>
                    </template>
                    <template #right>
                        <div class="flex items-center space-x-4">
                            <UiInput name="search" placeholder="Chercher">
                                <template #icon>
                                    <MagnifyingGlassIconSolid class="w-4 h-4" />
                                </template>
                            </UiInput>

                            <button class="btn">
                                Login
                            </button>
                        </div>
                    </template>
                </UiNavigationMenu>
            </div>
            <div class="space-y-4">
                <UiSectionTitle>
                    Cards
                </UiSectionTitle>

                <div class="grid grid-cols-4 gap-6">
                    <UiCard>
                        <UiCardBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores accusamus, ullam non corporis impedit explicabo rem dolores, inventore maxime ut laboriosam delectus animi in? Soluta harum laboriosam sint ipsam obcaecati!</UiCardBody>
                    </UiCard>
                    <UiCard>
                        <UiCardHeader>
                            Header
                        </UiCardHeader>
                        <UiCardBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores accusamus, ullam non corporis impedit explicabo rem dolores, inventore maxime ut laboriosam delectus animi in? Soluta harum laboriosam sint ipsam obcaecati!</UiCardBody>
                    </UiCard>
                    <UiCard>
                        <UiCardHeader>
                            Header
                        </UiCardHeader>
                        <UiCardBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores accusamus, ullam non corporis impedit explicabo rem dolores, inventore maxime ut laboriosam delectus animi in? Soluta harum laboriosam sint ipsam obcaecati!</UiCardBody>
                        <UiCardFooter>
                            Footer
                        </UiCardFooter>
                    </UiCard>
                    <UiCard>
                        <UiCardFooter>
                            Footer
                        </UiCardFooter>
                    </UiCard>
                </div>
            </div>
            <div class="space-y-4">
                <UiSectionTitle>
                    Avatar
                </UiSectionTitle>

                <div>
                    <UiAvatar class="w-20 h-20" path="https://mydnic.be/img/me.jpg" />
                </div>
            </div>
            <div class="space-y-4">
                <UiSectionTitle>
                    Dropdown
                </UiSectionTitle>
                <div class="grid gap-4 md:grid-cols-4">
                    <UiDropdown class="relative">
                        <template #trigger>
                            <button class="w-full btn">
                                quoi
                            </button>
                        </template>
                        <template #content>
                            <div class="dropdown-menu">
                                <span class="dropdown-menu-item">item</span>
                                <span class="dropdown-menu-item">item</span>
                                <span class="dropdown-menu-divider" />
                                <span class="dropdown-menu-item">item</span>
                                <UiButtonModal id="modalindropdown">
                                    <template #trigger>
                                        <button class="dropdown-menu-item">
                                            open modal
                                        </button>
                                    </template>
                                    <UiSelect
                                        v-model="formData.select"
                                        name="select3"
                                        top
                                        :options="[
                                            { value: 0, label: 'Père' },
                                            { value: 1, label: 'Mère' }
                                        ]"
                                    />
                                    <div>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, repellat quidem commodi quo neque, eos excepturi, eum animi praesentium magni labore vel accusantium at repellendus! Quisquam vero rerum cumque illum?
                                    </div>
                                </UiButtonModal>
                            </div>
                        </template>
                    </UiDropdown>
                    <UiDropdown transition="expand" expand class="relative">
                        <template #trigger>
                            <button class="w-full btn">
                                quoi
                            </button>
                        </template>
                        <template #content>
                            <div class="p-10 border">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, voluptates. Corporis, labore ad necessitatibus quasi illum earum incidunt libero nam nobis eum voluptates possimus minima aperiam sunt veniam qui dolore?
                            </div>
                        </template>
                    </UiDropdown>
                    <UiDropdown disabled class="relative">
                        <template #trigger>
                            <button class="w-full btn">
                                disabled
                            </button>
                        </template>
                        <template #content>
                            <div class="p-10 border">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, voluptates. Corporis, labore ad necessitatibus quasi illum earum incidunt libero nam nobis eum voluptates possimus minima aperiam sunt veniam qui dolore?
                            </div>
                        </template>
                    </UiDropdown>
                </div>
            </div>
            <div class="space-y-4">
                <UiSectionTitle>
                    Documents
                </UiSectionTitle>
                <UiMediaFinder @search="setSearchFilter">
                    <UiMediaPreview v-for="media in documents" :key="media.id" :media="media" />
                </UiMediaFinder>
            </div>
            <div class="space-y-4">
                <UiSectionTitle>
                    Logs
                </UiSectionTitle>
                <div>
                    <UiLogList>
                        <UiLogItem
                            v-for="log in [
                                {id: 1, title: 'Title', author: 'clément rigo', date: '2020-01-01'},
                                {id: 2, title: 'Title', author: 'clément rigo', date: '2020-01-01'},
                            ]"
                            :key="log.id"
                            :title="log.title"
                            :author="log.author"
                            :date="log.date"
                        />
                    </UiLogList>
                </div>
            </div>
            <div class="space-y-4">
                <UiSectionTitle>
                    Tooltip
                </UiSectionTitle>
                <div class="grid grid-cols-4 gap-4">
                    <div>
                        <span v-tooltip="'SUPER TOOLLLL'">default</span>
                    </div>
                    <div>
                        <button v-tooltip="{content:'SUP', position: 'bottom'}">
                            bottom
                        </button>
                    </div>
                    <div>
                        <button v-tooltip="{content:'SUP', position: 'left'}">
                            left
                        </button>
                    </div>
                    <div>
                        <button v-tooltip="{content:'SUP', position: 'right'}">
                            right
                        </button>
                    </div>
                </div>
            </div>
            <div class="space-y-4">
                <UiSectionTitle>
                    Badges
                </UiSectionTitle>
                <div class="flex space-x-3">
                    <span class="badge"> Badge </span>
                    <span class="badge badge-primary"> Badge </span>
                    <span class="badge badge-red"> Badge </span>
                    <span class="badge badge-yellow"> Badge </span>
                    <span class="badge badge-green"> Badge </span>
                    <span class="badge badge-blue"> Badge </span>
                    <span class="badge badge-indigo"> Badge </span>
                    <span class="badge badge-purple"> Badge </span>
                    <span class="badge badge-pink"> Badge </span>
                </div>
                <div class="flex space-x-3">
                    <span class="badge badge-lg"> Badge </span>
                    <span class="badge badge-lg badge-primary"> Badge </span>
                    <span class="badge badge-lg badge-red"> Badge </span>
                    <span class="badge badge-lg badge-yellow"> Badge </span>
                    <span class="badge badge-lg badge-green"> Badge </span>
                    <span class="badge badge-lg badge-blue"> Badge </span>
                    <span class="badge badge-lg badge-indigo"> Badge </span>
                    <span class="badge badge-lg badge-purple"> Badge </span>
                    <span class="badge badge-lg badge-pink"> Badge </span>
                </div>
            </div>
            <div class="space-y-4">
                <UiSectionTitle>
                    Slide over and modals
                </UiSectionTitle>
                <UiButtonSlideOver id="testslideover" title="test" no-padding>
                    <template #trigger>
                        <button class="btn">
                            UiButtonSlideOver
                        </button>
                    </template>
                    <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita porro dolor at quae praesentium quod molestiae, facere perferendis quia autem sint dolores animi tenetur a quibusdam fugiat sit repellendus vitae!</div>
                    <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita porro dolor at quae praesentium quod molestiae, facere perferendis quia autem sint dolores animi tenetur a quibusdam fugiat sit repellendus vitae!</div>
                    <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita porro dolor at quae praesentium quod molestiae, facere perferendis quia autem sint dolores animi tenetur a quibusdam fugiat sit repellendus vitae!</div>
                    <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita porro dolor at quae praesentium quod molestiae, facere perferendis quia autem sint dolores animi tenetur a quibusdam fugiat sit repellendus vitae!</div>
                    <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita porro dolor at quae praesentium quod molestiae, facere perferendis quia autem sint dolores animi tenetur a quibusdam fugiat sit repellendus vitae!</div>
                    <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita porro dolor at quae praesentium quod molestiae, facere perferendis quia autem sint dolores animi tenetur a quibusdam fugiat sit repellendus vitae!</div>
                    <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita porro dolor at quae praesentium quod molestiae, facere perferendis quia autem sint dolores animi tenetur a quibusdam fugiat sit repellendus vitae!</div>
                    <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita porro dolor at quae praesentium quod molestiae, facere perferendis quia autem sint dolores animi tenetur a quibusdam fugiat sit repellendus vitae!</div>
                    <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita porro dolor at quae praesentium quod molestiae, facere perferendis quia autem sint dolores animi tenetur a quibusdam fugiat sit repellendus vitae!</div>
                    <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita porro dolor at quae praesentium quod molestiae, facere perferendis quia autem sint dolores animi tenetur a quibusdam fugiat sit repellendus vitae!</div>
                    <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita porro dolor at quae praesentium quod molestiae, facere perferendis quia autem sint dolores animi tenetur a quibusdam fugiat sit repellendus vitae!</div>
                </UiButtonSlideOver>
                <UiButtonModal id="test">
                    <template #trigger>
                        <button class="btn">
                            UiButtonModal
                        </button>
                    </template>
                    <form @submit.prevent="selectionChanged">
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, nam deserunt, blanditiis molestias architecto fugit consequuntur cupiditate facilis vitae nesciunt quia voluptatum cumque et distinctio impedit animi perspiciatis explicabo ratione!
                        </div>
                        <UiSelectMonth
                            v-model="formData.selectmultiple"
                            name="selectmultiple"
                            multiple
                            from="2020-01-01"
                            required
                        />
                        <button type="submit">
                            submit
                        </button>
                    </form>
                </UiButtonModal>

                <button id="dialog" class="btn" type="button" @click="triggerDialog">
                    Dialog trigger
                </button>
            </div>
            <div class="space-y-4">
                <UiSectionTitle>
                    Toast
                </UiSectionTitle>
                <div>
                    <button class="btn" @click="showToast">
                        Show toast
                    </button>
                </div>
            </div>
            <div class="space-y-4">
                <UiSectionTitle>
                    Loader
                </UiSectionTitle>
                <div class="grid gap-4 md:grid-cols-3">
                    <UiLoader />
                    <div>
                        <UiInlineLoader />
                    </div>
                    <div>
                        <UiInlineLoader class="gray-dark" />
                    </div>
                </div>
            </div>
            <div class="space-y-4">
                <UiSectionTitle>
                    Tabs
                </UiSectionTitle>
                <UiHorizontalTabs
                    :tabs="[
                        {label: 'Team', slotName: 'team', slotLabel: 'team-label'},
                        {label: 'Finance', slotName: 'finance'},
                    ]"
                >
                    <template #team-label>
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                        </svg>
                        <span>Team</span>
                    </template>
                    <template #team>
                        TEAM Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt tenetur quia nostrum rerum voluptate. Porro aliquam impedit, magnam accusamus rerum suscipit necessitatibus cupiditate distinctio quos ea doloribus omnis enim quo.
                    </template>
                    <template #finance>
                        FONANCE Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt tenetur quia nostrum rerum voluptate. Porro aliquam impedit, magnam accusamus rerum suscipit necessitatibus cupiditate distinctio quos ea doloribus omnis enim quo.
                    </template>
                </UiHorizontalTabs>
                <UiVerticalTabs
                    :tabs="[
                        {label: 'Team', slotName: 'team', slotLabel: 'team-label'},
                        {label: 'Finance', slotName: 'finance'},
                    ]"
                >
                    <template #team-label>
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                        </svg>
                        <span>Team</span>
                    </template>
                    <template #team>
                        TEAM Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt tenetur quia nostrum rerum voluptate. Porro aliquam impedit, magnam accusamus rerum suscipit necessitatibus cupiditate distinctio quos ea doloribus omnis enim quo.
                    </template>
                    <template #finance>
                        FONANCE Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt tenetur quia nostrum rerum voluptate. Porro aliquam impedit, magnam accusamus rerum suscipit necessitatibus cupiditate distinctio quos ea doloribus omnis enim quo.
                    </template>
                </UiVerticalTabs>
            </div>
            <div class="space-y-4">
                <UiSectionTitle>
                    Alerts
                </UiSectionTitle>
                <div class="space-y-2">
                    <UiAlert dismissable>
                        Lorem, ipsum dolor sit amet consectetur - dismissable
                    </UiAlert>
                    <UiAlert level="danger" closable title="Closable">
                        Lorem, ipsum dolor sit amet consectetur - closable
                    </UiAlert>
                    <UiAlert level="warning" dismissable>
                        warning, ipsum dolor sit amet consectetur - dismissable
                    </UiAlert>
                    <UiAlert level="success">
                        Lorem, ipsum dolor sit amet consectetur
                    </UiAlert>
                </div>
            </div>
            <div class="space-y-4">
                <UiSectionTitle>
                    Form Inputs
                </UiSectionTitle>
                <h2 class="subtitle">
                    Checkbox
                </h2>
                <div class="grid gap-4 md:grid-cols-3">
                    <div>
                        <UiCheckbox v-model="formData.boolean" name="boolean" />
                        {{ formData.boolean }}
                    </div>
                    <div>
                        <UiDateCheckbox v-model="formData.boolean" name="boolean" />
                        {{ formData.boolean }}
                    </div>
                    <UiCheckbox v-model="formData.boolean" name="boolean">
                        Label
                    </UiCheckbox>
                    <UiToggle v-model="formData.boolean" name="toggle" />
                    <UiToggle v-model="formData.boolean" name="toggle">
                        Label
                    </UiToggle>
                </div>
                <h2 class="subtitle">
                    Date
                </h2>
                <div class="grid gap-4 md:grid-cols-3">
                    <div>
                        <UiInputDate v-model="formData.date" name="date" />
                        {{ formData.date }}
                    </div>
                    <UiInputDate v-model="formData.datetime" with-time name="datetime" />
                    <UiInputDate v-model="formData.month" month name="datetime" />
                </div>
                <div class="md:col-span-6">
                    <UiInputSchedule v-model="formData.schedule" name="toto" />
                </div>
                <div class="md:col-span-6">
                    <UiInputSchedule v-model="formData.schedule" name="toto" with-time />
                </div>
                <h2 class="subtitle">
                    Inputs
                </h2>
                <div class="grid gap-4 md:grid-cols-3">
                    <UiInput v-model="formData.text" name="input" required label="wesh" />
                    <UiInput v-model="formData.text" name="input" required />
                    <UiInput v-model="formData.text" name="disabled" disabled />
                    <div>
                        <UiInput v-model="formData.text" name="input" placeholder="Chercher">
                            <template #icon>
                                <MagnifyingGlassIconSolid class="w-4 h-4" />
                            </template>
                        </UiInput>
                    </div>
                    <UiTextarea v-model="formData.text" name="longText" />
                    <UiInputMoney v-model="formData.amount" name="money" />
                    <div class="md:col-span-6">
                        <UiInputHtml v-model="formData.html" name="html" />

                        <div class="prose" v-html="formData.html" />
                    </div>
                    <div class="md:col-span-6">
                        <UiRange
                            v-model="formData.range"
                            name="range"
                        />
                    </div>
                </div>
                <h2 class="subtitle">
                    Files
                </h2>
                <div class="grid gap-4 md:grid-cols-3">
                    <UiInputFile v-model="formData.file" multiple name="file" required />
                    <UiInputImage v-model="formData.image" name="image" />
                    <UiInputImage v-model="formData.nothing" name="image" />
                    <div class="w-1/4 py-3 border">
                        <UiInputImage v-model="formData.image" name="image" />
                    </div>
                </div>
                <h2 class="subtitle">
                    Select
                </h2>
                <div class="grid gap-4 md:grid-cols-3">
                    <UiSelect
                        v-model="formData.select"
                        name="select1"
                        :options="[
                            { value: 0, label: 'Père' },
                            { value: 1, label: 'Mère' }
                        ]"
                    >
                        <template #icon>
                            <EnvelopeIconSolid class="icon" />
                        </template>
                    </UiSelect>
                    <UiSelect
                        v-model="formData.select"
                        name="selectWithGroups"
                        :options="[
                            [
                                {value: '1', label: 'One'},
                                {value: '2', label: 'Two'},
                                {value: '3', label: 'Three', disabled: true}
                            ],
                            [
                                {value: 'lorem', label: 'Lorem ipsum'},
                                {value: 'dolor', label: 'dolor sit amet'},
                                {value: 'lorem1', label: 'Lorem ipsum'},
                                {value: 'dolor2', label: 'dolor sit amet'},
                                {value: 'lorem3', label: 'Lorem ipsum'}
                            ],
                            {value: 'dolor4', label: 'dolor sit amet'},
                            'noobject',
                        ]"
                    />
                    <UiSelect
                        v-model="formData.select"
                        name="select2"
                        :options="[
                            {value: '1', label: 'One'},
                            {value: '2', label: 'Two'},
                            {value: '3', label: 'Three', disabled: true},
                            {value: 'lorem', label: 'Lorem ipsum'},
                            {value: 'dolor', label: 'dolor sit amet'},
                            {value: 'lorem1', label: 'Lorem ipsum'},
                            {value: 'dolor2', label: 'dolor sit amet'},
                            {value: 'lorem3', label: 'Lorem ipsum'},
                            {value: 'dolor4', label: 'dolor sit amet'},
                            'noobject',
                        ]"
                    />
                    <UiSelect
                        v-model="formData.selectmultiple"
                        name="selectmultiple"
                        multiple
                        :options="[
                            {value: '1', label: 'One'},
                            {value: '2', label: 'Two'},
                            {value: '3', label: 'Three'},
                            {value: 'lorem', label: 'Lorem ipsum'},
                            {value: 'dolor', label: 'dolor sit amet'},
                            {value: 'lorem1', label: 'Lorem ipsum'},
                            {value: 'dolor2', label: 'dolor sit amet'},
                            {value: 'lorem3', label: 'Lorem ipsum'},
                            {value: 'dolor4', label: 'dolor sit amet'},
                            'noobject',
                        ]"
                    />
                    <UiSelect
                        v-model="formData.select"
                        name="select3"
                        top
                        :options="[
                            { value: 0, label: 'Père' },
                            { value: 1, label: 'Mère' }
                        ]"
                    />
                    <UiSelectMonth
                        v-model="formData.selectmultiple"
                        name="selectmultiple4"
                        multiple
                        from="2020-01-01"
                    />
                    {{ formData.selectmultiple }}
                </div>
                <h2 class="subtitle">
                    Radio Input
                </h2>
                <div class="space-y-4">
                    <UiRadioGroup
                        v-model="formData.plan"
                        name="plan"
                        :options="['free', 'business', 'enterprise']"
                    >
                        <template #free-label>
                            Free
                        </template>
                        <template #business-label>
                            Business
                        </template>
                        <template #enterprise-label>
                            Enterprise
                        </template>

                        <template #free-description-center>
                            3$/mo
                        </template>
                        <template #business-description-center>
                            6$/mo
                        </template>
                        <template #enterprise-description-center>
                            9$/mo
                        </template>

                        <template #free-description-right>
                            Up to 1 jobs
                        </template>
                        <template #business-description-right>
                            Up to 2 jobs
                        </template>
                        <template #enterprise-description-right>
                            Up to 3 jobs
                        </template>
                    </UiRadioGroup>

                    <UiRadioCards
                        v-model="formData.plan"
                        name="plan"
                        :options="[
                            {value: 'free', label: 'Free'},
                            {value: 'business', label: 'Business'},
                            {value: 'enterprise', label: 'Enterprise'}
                        ]"
                    />
                </div>
            </div>
            <div class="space-y-4">
                <UiSectionTitle>
                    Buttons
                </UiSectionTitle>
                <div class="flex flex-wrap items-center space-x-4">
                    <button class="btn">
                        <EnvelopeIconSolid class="icon" />
                        test
                    </button>
                    <button class="btn loading">
                        test
                    </button>
                    <button class="btn btn-primary loading">
                        test
                    </button>
                    <button class="btn btn-secondary">
                        test
                    </button>
                    <button class="btn btn-red loading">
                        test
                    </button>
                    <button class="btn btn-green loading">
                        test
                    </button>
                    <button class="btn btn-orange loading">
                        test
                    </button>
                    <button class="btn btn-sm btn-primary">
                        test
                    </button>
                    <button class="btn btn-sm btn-red">
                        test
                    </button>
                    <button class="btn btn-sm btn-green">
                        test
                    </button>
                    <button class="btn btn-sm btn-orange">
                        test
                    </button>
                    <button class="btn btn-lg btn-primary">
                        test
                    </button>
                    <button class="btn btn-lg btn-red">
                        test
                    </button>
                    <button class="btn btn-lg btn-green">
                        test
                    </button>
                    <button class="btn btn-lg btn-orange">
                        test
                    </button>
                </div>
            </div>
            <div class="space-y-4">
                <UiSectionTitle>
                    Ago
                </UiSectionTitle>
                <div>
                    {{ $filters.ago('2022-04-04') }}
                </div>
                <div>
                    {{ $filters.ago('2022-04-04', true) }}
                </div>
            </div>
            <div class="space-y-4">
                <UiSectionTitle>
                    Steps
                </UiSectionTitle>
                <UiSteps
                    :current="step"
                    :steps="[
                        {number:1, label: 'Priorité', sublabel: 'lorem dorme', allowed: true},
                        {number:2, label: 'Dates', allowed: true},
                        {number:3, label: 'Enfant', allowed: true},
                        {number:4, label: 'Parents', allowed: true},
                        {number:5, label: 'Contrats & Avance', allowed: false},
                    ]"
                    @change-step="changeStep"
                />
                <UiHorizontalSteps
                    :current="step"
                    :steps="[
                        {number:1, label: 'Priorité', sublabel: 'lorem dorme', allowed: true},
                        {number:2, label: 'Dates', allowed: true},
                        {number:3, label: 'Enfant', allowed: true},
                        {number:4, label: 'Parents', allowed: true},
                        {number:5, label: 'Contrats & Avance', allowed: false},
                    ]"
                    @change-step="changeStep"
                />
            </div>
            <div class="space-y-4">
                <UiSectionTitle>
                    Calendar
                </UiSectionTitle>
                <UiYearlyCalendar />
                <UiYearlyCalendar year="2039">
                    <template #header-right>
                        <button class="btn">
                            btn
                        </button>
                    </template>

                    <template #2022-12-09>
                        VDDI
                    </template>
                </UiYearlyCalendar>
                <UiMonthCalendar
                    :events="[
                        { id: 1, name: 'Design review', time: '10AM', date: '2022-04-03' },
                        { id: 1, name: 'Design review', time: '10AM', date: '2022-04-03' },
                        { id: 2, name: 'Sales meeting', time: '2PM', date: '2022-04-23' }
                    ]"
                />

                <div class="h-[600px]">
                    <UiWeekCalendar
                        :events="[
                            { id: 1, name: 'Design review', start: '10:00:00', end: '14:00:00', date: '2022-10-12', color: 'blue' },
                            { id: 1, name: 'Design review', start: '15:00:00', end: '20:00:00', date: '2022-10-13', color: 'pink' },
                            { id: 2, name: 'Sales meeting', start: '10:00:00', end: '14:00:00', date: '2022-10-14', color: 'red' }
                        ]"
                        @event-clicked="eventClicked"
                    />
                </div>
            </div>
            <div class="space-y-4">
                <UiSectionTitle>
                    Table
                </UiSectionTitle>
                <UiTableHeader title="Demo Table" subtitle="lorem ipseum">
                    <button class="btn">
                        button
                    </button>
                </UiTableHeader>
                <UiTableList
                    :cols="[
                        {slot: 'name', title: 'Nom', sortableBy: (item) => item.name},
                        {slot: 'active', title: 'Actif ?', mobile: false},
                        {slot: 'salary', title: 'Salaire', sortableBy: (item) => item.salary},
                        {slot: 'actions'}
                    ]"
                    :items="[
                        {name: 'Clément', active: false, salary: '2000€'},
                        {name: 'Drilon', active: true, salary: '2000€'},
                        {name: 'Drilon', active: true, salary: '2000€'},
                        {name: 'Drilon', active: true, salary: '2000€'},
                        {name: 'Drilon', active: true, salary: '2000€'},
                        {name: 'Drilon', active: true, salary: '2000€'},
                    ]"
                    paginate="1"
                >
                    <template #name="{item:user}">
                        {{ user.name }}
                    </template>
                    <template #active="{item:user}">
                        <UiTableBooleanValue :value="user.active" />
                    </template>
                    <template #salary="{item:user}">
                        {{ user.salary }}
                    </template>
                    <template #actions="{item:user}">
                        <UiTableActionMenu>
                            <button class="dropdown-menu-item">
                                <MagnifyingGlassIconSolid class="icon" />
                                Edit {{ user.name }}
                            </button>
                        </UiTableActionMenu>
                    </template>
                </UiTableList>
                <UiTableList
                    condensed
                    :cols="[
                        {slot: 'name', title: 'Nom'},
                        {slot: 'active', title: 'Actif ?', mobile: false},
                        {slot: 'salary', title: 'Salaire'},
                        {slot: 'actions'}
                    ]"
                    :items="[
                        {name: 'Clément', active: false, salary: '1000€'},
                        {name: 'Drilon', active: true, salary: '1000€'},
                    ]"
                >
                    <template #name="{item:user}">
                        {{ user.name }}
                    </template>
                    <template #active="{item:user}">
                        <UiTableBooleanValue :value="user.active" />
                    </template>
                    <template #salary="{item:user}">
                        {{ user.salary }}
                    </template>
                    <template #actions="{item:user}">
                        <UiTableActionMenu>
                            <button class="dropdown-menu-item">
                                Edit {{ user.name }}
                            </button>
                        </UiTableActionMenu>
                    </template>
                </UiTableList>
                <UiTableList
                    id="printable"
                    selectable
                    :cols="[
                        {slot: 'name', title: 'Nom'},
                        {slot: 'active', title: 'Actif ?', mobile: false},
                        {slot: 'salary', title: 'Salaire'},
                        {slot: 'actions'}
                    ]"
                    :items="[
                        {name: 'Clément', active: false, salary: '1000€', id: 1},
                        {name: 'Drilon', active: true, salary: '1000€', id: 2},
                    ]"
                    @selection-changed="selectionChanged"
                >
                    <template #name="{item:user}">
                        {{ user.name }}
                    </template>
                    <template #active="{item:user}">
                        <UiTableBooleanValue :value="user.active" />
                    </template>
                    <template #salary="{item:user}">
                        {{ user.salary }}
                    </template>
                    <template #actions="{item:user}">
                        <UiTableActionMenu>
                            <button class="dropdown-menu-item">
                                Edit {{ user.name }}
                            </button>
                        </UiTableActionMenu>
                    </template>
                </UiTableList>
            </div>
            <div class="space-y-4">
                <UiSectionTitle>
                    Print
                </UiSectionTitle>

                <div>
                    <UiPrintButton id="printable" />
                </div>
            </div>
            <div class="space-y-4">
                <UiSectionTitle>
                    Feedback
                </UiSectionTitle>

                <div>
                    <UiCheckAnimation>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae explicabo, culpa veniam iste hic cum soluta sit dolor. Cupiditate quos nesciunt ipsam amet praesentium, animi doloribus accusamus! Quod, labore quo.
                    </UiCheckAnimation>
                </div>

                <div>
                    <UiValidationErrors :errors="{'baby.first_name': ['Un dossier existe déjà pour Clément Rigo.'], 'baby.last_name': ['Un dossier existe déjà pour Clément Rigo.']}" />
                    <UiValidationErrors />
                </div>
            </div>
        </div>
        <UiToastWrapper />
        <UiDialog />
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import dayjs from 'dayjs'
import dateRange from './src/js/mixins/dateRange'

export default defineComponent({
    mixins: [dateRange],
    data () {
        return {
            step: 1,
            formData: {
                plan: null,
                boolean: false,
                text: '',
                date: undefined,
                file: undefined,
                amount: 100,
                html: '<h1>WHY</h1>',
                month: undefined,
                selectmultiple: [],
                range: [0, 50]
            },
            documents: [

            ]
        }
    },
    computed: {
        quarterHours () {
            return this.generateDateRange(
                dayjs().hour(6).minute(0),
                dayjs().hour(19).minute(59),
                15,
                'minutes',
                'HH:mm'
            )
        }
    },

    methods: {
        changeStep (q) {
            this.step = q
        },

        selectionChanged (selection) {
            console.log(selection)
        },

        triggerDialog () {
            this.$dialog.show({
                title: 'Dialog',
                message: 'This is a dialog',
                buttons: [
                    { title: 'Close' }
                ]
            })
        },

        showToast () {
            this.$toast.success({
                title: 'title',
                message: 'Hello World'
            })

            this.$toast.show('Yooo!')
        },

        eventClicked (e) {
            console.log(e)
        },

        setSearchFilter (e) {
            console.log(e)
        }
    }
})
</script>
