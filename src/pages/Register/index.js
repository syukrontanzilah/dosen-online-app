import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Header, Input, Button, Gap, } from '../../component'
import { colors } from '../../utils'

const Register = () => {
    return (
        <View style={styles.page}>
            <Header />
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.container}>
                <Text style={styles.text}>Isi Form data berikut dengan lengkap sesuai instruksi</Text>
                <Gap height={20} />
                <Input label='Nama Lengkap'
                    placeholder='Contoh: Andi Pratama' />
                <Gap height={20} />

                <Input label='Kelas'
                    placeholder='Contoh: 7A' />
                <Gap height={20} />


                <Input label='Alamat Email'
                    placeholder='Contoh: andi123@gmail.com' />
                <Gap height={20} />

                <Input label='No Telephone'
                    placeholder='Contoh: 0123456789'
                />
                <Gap height={20} />

                <Input label='Kata Sandi'
                    placeholder='Kata sandi tidak bolah kurang dari 6 karakter' />
                <Gap height={20} />

                <Button title='Selanjutnya' />
                <Gap height={20} />

            </ScrollView>







        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white
    },
    container: {
        padding: 40,
        paddingTop: 0
    },
    text: {
        fontSize: 18,
        fontFamily: 'Lato-Regular',
        marginTop:10,
        //maxWidth: 160,
        color: colors.text.primary,

    }

})
