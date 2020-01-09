<template>
    <div class="container">
        <app-header
            :maxQuotes="maxQuotes"
            :quoteCount="quotes.length"
        ></app-header>
        <app-new-quote @quoteAdded="newQuote"></app-new-quote>
        <app-quote-grid
            :quotes="quotes"
            @quoteDeleted="deleteQuote"
        ></app-quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">
                    Info: Click a quote to delete it.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import QuoteGrid from "./components/QuoteGrid";
import NewQuote from "./components/NewQuote";
import Header from "./components/Header";
export default {
    data: function() {
        return {
            maxQuotes: 10,
            quotes: ["Example quote for you"]
        };
    },
    components: {
        appQuoteGrid: QuoteGrid,
        appNewQuote: NewQuote,
        appHeader: Header
    },
    methods: {
        newQuote(quote) {
            if (this.quotes.length >= this.maxQuotes) {
                return alert(
                    "Maximum number of quotes entered - please delete a quote first."
                );
            }
            this.quotes.push(quote);
        },
        deleteQuote(index) {
            this.quotes.splice(index, 1);
        }
    }
};
</script>

<style></style>
