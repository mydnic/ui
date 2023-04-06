<template>
    <table class="text-sm schedule-table" aria-labelledby="schedule-table-caption">
        <caption id="schedule-table-caption" class="hidden">
            Horaire
        </caption>
        <thead>
            <tr class="hidden md:table-row">
                <th scope="col" />
                <th scope="col" class="cursor-pointer" @click="toggleDay('monday')">
                    Lundi
                </th>
                <th scope="col" class="cursor-pointer" @click="toggleDay('tuesday')">
                    Mardi
                </th>
                <th scope="col" class="cursor-pointer" @click="toggleDay('wednesday')">
                    Mercredi
                </th>
                <th scope="col" class="cursor-pointer" @click="toggleDay('thursday')">
                    Jeudi
                </th>
                <th scope="col" class="cursor-pointer" @click="toggleDay('friday')">
                    Vendredi
                </th>
                <th v-if="withWeekend" scope="col" class="cursor-pointer" @click="toggleDay('saturday')">
                    Samedi
                </th>
                <th v-if="withWeekend" scope="col" class="cursor-pointer" @click="toggleDay('sunday')">
                    Dimanche
                </th>
            </tr>
            <tr class="table-row md:hidden">
                <th scope="col" />
                <th scope="col">
                    AM
                </th>
                <th scope="col">
                    PM
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="hidden md:table-row">
                <td>
                    Matin
                </td>
                <td>
                    <div
                        class="absolute inset-0 flex items-center justify-center transition cursor-pointer"
                        :class="{
                            'bg-green-500': schedule.monday.am
                        }"
                        @click="toggle('monday', 'am')"
                    >
                        <svg v-if="schedule.monday.am" class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                    </div>
                </td>
                <td>
                    <div
                        class="absolute inset-0 flex items-center justify-center transition cursor-pointer"
                        :class="{
                            'bg-green-500': schedule.tuesday.am
                        }"
                        @click="toggle('tuesday', 'am')"
                    >
                        <svg v-if="schedule.tuesday.am" class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                    </div>
                </td>
                <td>
                    <div
                        class="absolute inset-0 flex items-center justify-center transition cursor-pointer"
                        :class="{
                            'bg-green-500': schedule.wednesday.am
                        }"
                        @click="toggle('wednesday', 'am')"
                    >
                        <svg v-if="schedule.wednesday.am" class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                    </div>
                </td>
                <td>
                    <div
                        class="absolute inset-0 flex items-center justify-center transition cursor-pointer"
                        :class="{
                            'bg-green-500': schedule.thursday.am
                        }"
                        @click="toggle('thursday', 'am')"
                    >
                        <svg v-if="schedule.thursday.am" class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                    </div>
                </td>
                <td>
                    <div
                        class="absolute inset-0 flex items-center justify-center transition cursor-pointer"
                        :class="{
                            'bg-green-500': schedule.friday.am
                        }"
                        @click="toggle('friday', 'am')"
                    >
                        <svg v-if="schedule.friday.am" class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                    </div>
                </td>
                <td v-if="withWeekend">
                    <div
                        class="absolute inset-0 flex items-center justify-center transition cursor-pointer"
                        :class="{
                            'bg-green-500': schedule.saturday.am
                        }"
                        @click="toggle('saturday', 'am')"
                    >
                        <svg v-if="schedule.saturday.am" class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                    </div>
                </td>
                <td v-if="withWeekend">
                    <div
                        class="absolute inset-0 flex items-center justify-center transition cursor-pointer"
                        :class="{
                            'bg-green-500': schedule.sunday.am
                        }"
                        @click="toggle('sunday', 'am')"
                    >
                        <svg v-if="schedule.sunday.am" class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                    </div>
                </td>
            </tr>

            <tr class="hidden md:table-row">
                <td>Après-midi</td>
                <td>
                    <div
                        class="absolute inset-0 flex items-center justify-center transition cursor-pointer"
                        :class="{
                            'bg-green-500': schedule.monday.pm
                        }"
                        @click="toggle('monday', 'pm')"
                    >
                        <svg v-if="schedule.monday.pm" class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                    </div>
                </td>
                <td>
                    <div
                        class="absolute inset-0 flex items-center justify-center transition cursor-pointer"
                        :class="{
                            'bg-green-500': schedule.tuesday.pm
                        }"
                        @click="toggle('tuesday', 'pm')"
                    >
                        <svg v-if="schedule.tuesday.pm" class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                    </div>
                </td>
                <td>
                    <div
                        class="absolute inset-0 flex items-center justify-center transition cursor-pointer"
                        :class="{
                            'bg-green-500': schedule.wednesday.pm
                        }"
                        @click="toggle('wednesday', 'pm')"
                    >
                        <svg v-if="schedule.wednesday.pm" class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                    </div>
                </td>
                <td>
                    <div
                        class="absolute inset-0 flex items-center justify-center transition cursor-pointer"
                        :class="{
                            'bg-green-500': schedule.thursday.pm
                        }"
                        @click="toggle('thursday', 'pm')"
                    >
                        <svg v-if="schedule.thursday.pm" class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                    </div>
                </td>
                <td>
                    <div
                        class="absolute inset-0 flex items-center justify-center transition cursor-pointer"
                        :class="{
                            'bg-green-500': schedule.friday.pm
                        }"
                        @click="toggle('friday', 'pm')"
                    >
                        <svg v-if="schedule.friday.pm" class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                    </div>
                </td>
                <td v-if="withWeekend">
                    <div
                        class="absolute inset-0 flex items-center justify-center transition cursor-pointer"
                        :class="{
                            'bg-green-500': schedule.saturday.pm
                        }"
                        @click="toggle('saturday', 'pm')"
                    >
                        <svg v-if="schedule.saturday.pm" class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                    </div>
                </td>
                <td v-if="withWeekend">
                    <div
                        class="absolute inset-0 flex items-center justify-center transition cursor-pointer"
                        :class="{
                            'bg-green-500': schedule.sunday.pm
                        }"
                        @click="toggle('sunday', 'pm')"
                    >
                        <svg v-if="schedule.sunday.pm" class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                    </div>
                </td>
            </tr>

            <tr v-if="withTime" class="hidden md:table-row">
                <td>
                    Heures <span class="text-xs text-gray-500">(optionnel)</span>
                </td>
                <td>
                    <div v-if="schedule.monday.am || schedule.monday.pm">
                        <label class="label" for="monday_start_at">Heure d'arrivée</label>
                        <input
                            name="monday_start_at"
                            type="time"
                            step="900"
                            class="w-full px-1 py-px text-sm border rounded"
                            :value="schedule.monday.hours ? schedule.monday.hours.start_at : undefined"
                            @input="setHour('monday', 'start_at', $event)"
                        >
                        <label class="label" for="monday_left_at">Heure de départ</label>
                        <input
                            name="monday_left_at"
                            type="time"
                            step="900"
                            class="w-full px-1 py-px text-sm border rounded"
                            :value="schedule.monday.hours ? schedule.monday.hours.left_at : undefined"
                            @input="setHour('monday', 'left_at', $event)"
                        >
                    </div>
                </td>
                <td>
                    <div v-if="schedule.tuesday.am || schedule.tuesday.pm">
                        <label class="label" for="tuesday_start_at">Heure d'arrivée</label>
                        <input
                            name="tuesday_start_at"
                            type="time"
                            step="900"
                            class="w-full px-1 py-px text-sm border rounded"
                            :value="schedule.tuesday.hours ? schedule.tuesday.hours.start_at : undefined"
                            @input="setHour('tuesday', 'start_at', $event)"
                        >
                        <label class="label" for="tuesday_left_at">Heure de départ</label>
                        <input
                            name="tuesday_left_at"
                            type="time"
                            step="900"
                            class="w-full px-1 py-px text-sm border rounded"
                            :value="schedule.tuesday.hours ? schedule.tuesday.hours.left_at : undefined"
                            @input="setHour('tuesday', 'left_at', $event)"
                        >
                    </div>
                </td>
                <td>
                    <div v-if="schedule.wednesday.am || schedule.wednesday.pm">
                        <label class="label" for="wednesday_start_at">Heure d'arrivée</label>
                        <input
                            name="wednesday_start_at"
                            type="time"
                            step="900"
                            class="w-full px-1 py-px text-sm border rounded"
                            :value="schedule.wednesday.hours ? schedule.wednesday.hours.start_at : undefined"
                            @input="setHour('wednesday', 'start_at', $event)"
                        >
                        <label class="label" for="wednesday_left_at">Heure de départ</label>
                        <input
                            name="wednesday_left_at"
                            type="time"
                            step="900"
                            class="w-full px-1 py-px text-sm border rounded"
                            :value="schedule.wednesday.hours ? schedule.wednesday.hours.left_at : undefined"
                            @input="setHour('wednesday', 'left_at', $event)"
                        >
                    </div>
                </td>
                <td>
                    <div v-if="schedule.thursday.am || schedule.thursday.pm">
                        <label class="label" for="thursday_start_at">Heure d'arrivée</label>
                        <input
                            name="thursday_start_at"
                            type="time"
                            step="900"
                            class="w-full px-1 py-px text-sm border rounded"
                            :value="schedule.thursday.hours ? schedule.thursday.hours.start_at : undefined"
                            @input="setHour('thursday', 'start_at', $event)"
                        >
                        <label class="label" for="thursday_left_at">Heure de départ</label>
                        <input
                            name="thursday_left_at"
                            type="time"
                            step="900"
                            class="w-full px-1 py-px text-sm border rounded"
                            :value="schedule.thursday.hours ? schedule.thursday.hours.left_at : undefined"
                            @input="setHour('thursday', 'left_at', $event)"
                        >
                    </div>
                </td>
                <td>
                    <div v-if="schedule.friday.am || schedule.friday.pm">
                        <label class="label" for="friday_start_at">Heure d'arrivée</label>
                        <input
                            name="friday_start_at"
                            type="time"
                            step="900"
                            class="w-full px-1 py-px text-sm border rounded"
                            :value="schedule.friday.hours ? schedule.friday.hours.start_at : undefined"
                            @input="setHour('friday', 'start_at', $event)"
                        >
                        <label class="label" for="friday_left_at">Heure de départ</label>
                        <input
                            name="friday_left_at"
                            type="time"
                            step="900"
                            class="w-full px-1 py-px text-sm border rounded"
                            :value="schedule.friday.hours ? schedule.friday.hours.left_at : undefined"
                            @input="setHour('friday', 'left_at', $event)"
                        >
                    </div>
                </td>
                <td v-if="withWeekend">
                    <div v-if="schedule.saturday.am || schedule.saturday.pm">
                        <label class="label" for="saturday_start_at">Heure d'arrivée</label>
                        <input
                            name="saturday_start_at"
                            type="time"
                            step="900"
                            class="w-full px-1 py-px text-sm border rounded"
                            :value="schedule.saturday.hours ? schedule.saturday.hours.start_at : undefined"
                            @input="setHour('saturday', 'start_at', $event)"
                        >
                        <label class="label" for="saturday_left_at">Heure de départ</label>
                        <input
                            name="saturday_left_at"
                            type="time"
                            step="900"
                            class="w-full px-1 py-px text-sm border rounded"
                            :value="schedule.saturday.hours ? schedule.saturday.hours.left_at : undefined"
                            @input="setHour('saturday', 'left_at', $event)"
                        >
                    </div>
                </td>
                <td v-if="withWeekend">
                    <div v-if="schedule.sunday.am || schedule.sunday.pm">
                        <label class="label" for="sunday_start_at">Heure d'arrivée</label>
                        <input
                            name="sunday_start_at"
                            type="time"
                            step="900"
                            class="w-full px-1 py-px text-sm border rounded"
                            :value="schedule.sunday.hours ? schedule.sunday.hours.start_at : undefined"
                            @input="setHour('sunday', 'start_at', $event)"
                        >
                        <label class="label" for="sunday_left_at">Heure de départ</label>
                        <input
                            name="sunday_left_at"
                            type="time"
                            step="900"
                            class="w-full px-1 py-px text-sm border rounded"
                            :value="schedule.sunday.hours ? schedule.sunday.hours.left_at : undefined"
                            @input="setHour('sunday', 'left_at', $event)"
                        >
                    </div>
                </td>
            </tr>

            <tr class="table-row md:hidden">
                <td>Lundi</td>
                <td>
                    <div
                        class="absolute inset-0 flex items-center justify-center transition cursor-pointer"
                        :class="{
                            'bg-green-500': schedule.monday.am
                        }"
                        @click="toggle('monday', 'am')"
                    >
                        <svg v-if="schedule.monday.am" class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                    </div>
                </td>
                <td>
                    <div
                        class="absolute inset-0 flex items-center justify-center transition cursor-pointer"
                        :class="{
                            'bg-green-500': schedule.monday.pm
                        }"
                        @click="toggle('monday', 'pm')"
                    >
                        <svg v-if="schedule.monday.pm" class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                    </div>
                </td>
            </tr>
            <tr class="table-row md:hidden">
                <td>Mardi</td>
                <td>
                    <div
                        class="absolute inset-0 flex items-center justify-center transition cursor-pointer"
                        :class="{
                            'bg-green-500': schedule.tuesday.am
                        }"
                        @click="toggle('tuesday', 'am')"
                    >
                        <svg v-if="schedule.tuesday.am" class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                    </div>
                </td>
                <td>
                    <div
                        class="absolute inset-0 flex items-center justify-center transition cursor-pointer"
                        :class="{
                            'bg-green-500': schedule.tuesday.pm
                        }"
                        @click="toggle('tuesday', 'pm')"
                    >
                        <svg v-if="schedule.tuesday.pm" class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                    </div>
                </td>
            </tr>
            <tr class="table-row md:hidden">
                <td>Mercredi</td>
                <td>
                    <div
                        class="absolute inset-0 flex items-center justify-center transition cursor-pointer"
                        :class="{
                            'bg-green-500': schedule.wednesday.am
                        }"
                        @click="toggle('wednesday', 'am')"
                    >
                        <svg v-if="schedule.wednesday.am" class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                    </div>
                </td>
                <td>
                    <div
                        class="absolute inset-0 flex items-center justify-center transition cursor-pointer"
                        :class="{
                            'bg-green-500': schedule.wednesday.pm
                        }"
                        @click="toggle('wednesday', 'pm')"
                    >
                        <svg v-if="schedule.wednesday.pm" class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                    </div>
                </td>
            </tr>
            <tr class="table-row md:hidden">
                <td>Jeudi</td>
                <td>
                    <div
                        class="absolute inset-0 flex items-center justify-center transition cursor-pointer"
                        :class="{
                            'bg-green-500': schedule.thursday.am
                        }"
                        @click="toggle('thursday', 'am')"
                    >
                        <svg v-if="schedule.thursday.am" class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                    </div>
                </td>
                <td>
                    <div
                        class="absolute inset-0 flex items-center justify-center transition cursor-pointer"
                        :class="{
                            'bg-green-500': schedule.thursday.pm
                        }"
                        @click="toggle('thursday', 'pm')"
                    >
                        <svg v-if="schedule.thursday.pm" class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                    </div>
                </td>
            </tr>
            <tr class="table-row md:hidden">
                <td>Vendredi</td>
                <td>
                    <div
                        class="absolute inset-0 flex items-center justify-center transition cursor-pointer"
                        :class="{
                            'bg-green-500': schedule.friday.am
                        }"
                        @click="toggle('friday', 'am')"
                    >
                        <svg v-if="schedule.friday.am" class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                    </div>
                </td>
                <td>
                    <div
                        class="absolute inset-0 flex items-center justify-center transition cursor-pointer"
                        :class="{
                            'bg-green-500': schedule.friday.pm
                        }"
                        @click="toggle('friday', 'pm')"
                    >
                        <svg v-if="schedule.friday.pm" class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                    </div>
                </td>
            </tr>
            <tr class="table-row md:hidden">
                <td>Samedi</td>
                <td>
                    <div
                        class="absolute inset-0 flex items-center justify-center transition cursor-pointer"
                        :class="{
                            'bg-green-500': schedule.saturday.am
                        }"
                        @click="toggle('saturday', 'am')"
                    >
                        <svg v-if="schedule.saturday.am" class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                    </div>
                </td>
                <td>
                    <div
                        class="absolute inset-0 flex items-center justify-center transition cursor-pointer"
                        :class="{
                            'bg-green-500': schedule.saturday.pm
                        }"
                        @click="toggle('saturday', 'pm')"
                    >
                        <svg v-if="schedule.saturday.pm" class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                    </div>
                </td>
            </tr>
            <tr class="table-row md:hidden">
                <td>Dimanche</td>
                <td>
                    <div
                        class="absolute inset-0 flex items-center justify-center transition cursor-pointer"
                        :class="{
                            'bg-green-500': schedule.sunday.am
                        }"
                        @click="toggle('sunday', 'am')"
                    >
                        <svg v-if="schedule.sunday.am" class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                    </div>
                </td>
                <td>
                    <div
                        class="absolute inset-0 flex items-center justify-center transition cursor-pointer"
                        :class="{
                            'bg-green-500': schedule.sunday.pm
                        }"
                        @click="toggle('sunday', 'pm')"
                    >
                        <svg v-if="schedule.sunday.pm" class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { defineComponent } from 'vue'
const EMPTY_SCHEDULE = {
    monday: {
        am: false,
        pm: false
    },
    tuesday: {
        am: false,
        pm: false
    },
    wednesday: {
        am: false,
        pm: false
    },
    thursday: {
        am: false,
        pm: false
    },
    friday: {
        am: false,
        pm: false
    },
    saturday: {
        am: false,
        pm: false
    },
    sunday: {
        am: false,
        pm: false
    }
}

export default defineComponent({
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        modelValue: {
            type: Object,
            default: null
        },
        withTime: {
            type: Boolean,
            default: false
        },
        withWeekend: {
            type: Boolean,
            default: false
        }
    },

    data () {
        return {
            schedule: this.modelValue || JSON.parse(JSON.stringify(EMPTY_SCHEDULE))
        }
    },

    methods: {
        update () {
            if (!this.withWeekend) {
                this.schedule.saturday = { am: false, pm: false }
                this.schedule.sunday = { am: false, pm: false }
            }
            this.$emit('update:modelValue', this.schedule)
        },

        toggleDay (day) {
            if (this.disabled) {
                return
            }

            if (this.schedule[day].am) {
                this.schedule[day].am = false
                this.schedule[day].pm = false
            } else {
                this.schedule[day].am = true
                this.schedule[day].pm = true
            }

            this.update()
        },

        toggle (day, part) {
            if (this.disabled) {
                return
            }

            if (this.schedule[day][part]) {
                this.schedule[day][part] = false
            } else {
                this.schedule[day][part] = true
            }

            this.update()
        },

        setHour (day, b, e) {
            const value = e.target.value
            const hourObject = this.schedule[day].hours || {}
            hourObject[b] = value
            this.schedule[day].hours = hourObject
            this.schedule = JSON.parse(JSON.stringify(this.schedule))
            this.update()
        }
    }
})
</script>
