// src/screens/PagosScreen.tsx
//
// Pantalla de métodos de pago.

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
<<<<<<< HEAD
  Modal,
  TextInput,
  TouchableWithoutFeedback,
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  Modal,
  Alert,
>>>>>>> 18abcdc6fd3da31a4305ea9ef59c40c68909243c
>>>>>>> origin/master
>>>>>>> e8da3abcd0480b37f872a7006ab961f2b4bce4f7
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import Header from '../components/shared/Header';
<<<<<<< HEAD
import { Colors, BorderRadius, Typography } from '../theme/colors';
import InfoModal from '../components/shared/InfoModal';

=======
import { Colors, BorderRadius } from '../theme/colors';

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
// Datos iniciales de métodos de pago
>>>>>>> 18abcdc6fd3da31a4305ea9ef59c40c68909243c
>>>>>>> origin/master
>>>>>>> e8da3abcd0480b37f872a7006ab961f2b4bce4f7
const paymentMethods = [
  { id: '1', type: 'visa', last4: '4242', expiry: '12/26', isDefault: true, label: 'Visa' },
  { id: '2', type: 'mastercard', last4: '8821', expiry: '08/25', isDefault: false, label: 'Mastercard' },
  { id: '3', type: 'nequi', last4: '3110', expiry: null, isDefault: false, label: 'Nequi' },
];

const cardIconMap: Record<string, keyof typeof MaterialIcons.glyphMap> = {
  visa: 'credit-card',
  mastercard: 'credit-card',
  nequi: 'phone-android',
};

<<<<<<< HEAD
export default function PagosScreen() {
  const [selectedMethod, setSelectedMethod] = useState('1');
  const [methods, setMethods] = useState([
    { id: '1', type: 'visa', last4: '4242', expiry: '12/26', isDefault: true, label: 'Visa' },
    { id: '2', type: 'mastercard', last4: '8821', expiry: '08/25', isDefault: false, label: 'Mastercard' },
    { id: '3', type: 'nequi', last4: '3110', expiry: null, isDefault: false, label: 'Nequi' },
  ]);

  // Toast temporales
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Estados de agregar tarjeta
  const [showAddCardModal, setShowAddCardModal] = useState(false);
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');

  // Estados de recibo de cobro
  const [selectedBill, setSelectedBill] = useState<any | null>(null);
  const [showBillModal, setShowBillModal] = useState(false);

  const handleSelectCard = (id: string, label: string, last4: string) => {
    setSelectedMethod(id);
    // Cambiar isDefault en la lista
    setMethods(prev => prev.map(m => ({ ...m, isDefault: m.id === id })));
    setToastMessage(`¡Establecida ${label} •••• ${last4} como principal!`);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  const handleSaveCard = () => {
    if (!cardName || !cardNumber || !cardExpiry) {
      alert('Por favor completa los campos obligatorios');
      return;
    }

    const cleanNum = cardNumber.replace(/\s?/g, '');
    const last4 = cleanNum.slice(-4) || '1111';
    const isVisa = cleanNum.startsWith('4');
    const label = isVisa ? 'Visa' : 'Mastercard';
    const type = isVisa ? 'visa' : 'mastercard';

    const newCard = {
      id: String(methods.length + 1),
      type,
      last4,
      expiry: cardExpiry,
      isDefault: false,
      label,
    };

    setMethods(prev => [...prev, newCard]);
    setShowAddCardModal(false);

    // Resetear form
    setCardName('');
    setCardNumber('');
    setCardExpiry('');
    setCardCvv('');

    // Mostrar feedback
    setToastMessage('¡Nuevo método de pago agregado!');
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };
=======
<<<<<<< HEAD
export default function PagosScreen() {
  const [selectedMethod, setSelectedMethod] = useState('1');
=======
<<<<<<< HEAD
export default function PagosScreen() {
  const [selectedMethod, setSelectedMethod] = useState('1');
=======
// Opciones para agregar nuevo método (puedes ampliar)
const newPaymentOptions = [
  { id: 'add-card', label: 'Tarjeta de crédito o débito', icon: 'credit-card' },
  { id: 'add-nequi', label: 'Nequi', icon: 'phone-android' },
  { id: 'add-daviplata', label: 'Daviplata', icon: 'account-balance-wallet' },
  { id: 'add-efecty', label: 'Efecty', icon: 'attach-money' },
];

export default function PagosScreen() {
  const [selectedMethod, setSelectedMethod] = useState('1');
  const [modalVisible, setModalVisible] = useState(false);

  // Función para simular agregar un método
  const handleAddPaymentMethod = (optionId: string) => {
    setModalVisible(false);
    // Aquí podrías navegar a otra pantalla o mostrar un formulario
    Alert.alert(
      'Agregar método',
      `Has seleccionado: ${newPaymentOptions.find(o => o.id === optionId)?.label}`
    );
    // Luego podrías agregar un nuevo elemento al array paymentMethods (si usas estado)
    // Pero como paymentMethods es constante, tendrías que convertirlo en estado
  };
>>>>>>> 18abcdc6fd3da31a4305ea9ef59c40c68909243c
>>>>>>> origin/master
>>>>>>> e8da3abcd0480b37f872a7006ab961f2b4bce4f7

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <Header title="Métodos de Pago" />

<<<<<<< HEAD
      {/* Banner flotante de feedback (Toast) */}
      {toastMessage && (
        <View style={styles.toastContainer}>
          <MaterialIcons name="check-circle" size={18} color="#fff" />
          <Text style={styles.toastText}>{toastMessage}</Text>
        </View>
      )}

=======
>>>>>>> e8da3abcd0480b37f872a7006ab961f2b4bce4f7
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* === RESUMEN DEL PLAN === */}
        <View style={styles.planSummary}>
          <View style={styles.planSummaryLeft}>
            <View style={styles.planBadge}>
              <Text style={styles.planBadgeText}>PLAN PREMIUM</Text>
            </View>
            <Text style={styles.planName}>FoodPass Premium</Text>
            <Text style={styles.planSubtitle}>22 almuerzos / mes</Text>
          </View>
          <View style={styles.planPrice}>
            <Text style={styles.planPriceAmount}>$189</Text>
            <Text style={styles.planPricePer}>/mes</Text>
          </View>
        </View>

        {/* Próximo cobro */}
        <View style={styles.nextBilling}>
          <MaterialIcons name="event" size={16} color={Colors.tertiary} />
          <Text style={styles.nextBillingText}>Próximo cobro: 1 de junio, 2024</Text>
        </View>

        {/* === MÉTODOS DE PAGO === */}
        <Text style={styles.sectionTitle}>Tus tarjetas</Text>

<<<<<<< HEAD
        {methods.map((method) => (
=======
        {paymentMethods.map((method) => (
>>>>>>> e8da3abcd0480b37f872a7006ab961f2b4bce4f7
          <TouchableOpacity
            key={method.id}
            style={[
              styles.paymentCard,
              selectedMethod === method.id && styles.paymentCardSelected,
            ]}
<<<<<<< HEAD
            onPress={() => handleSelectCard(method.id, method.label, method.last4)}
=======
            onPress={() => setSelectedMethod(method.id)}
>>>>>>> e8da3abcd0480b37f872a7006ab961f2b4bce4f7
            activeOpacity={0.8}
          >
            {/* Ícono */}
            <View style={[
              styles.cardIcon,
              method.type === 'nequi' && styles.cardIconNequi
            ]}>
              <MaterialIcons
<<<<<<< HEAD
                name={cardIconMap[method.type] || 'credit-card'}
=======
                name={cardIconMap[method.type]}
>>>>>>> e8da3abcd0480b37f872a7006ab961f2b4bce4f7
                size={22}
                color={method.type === 'nequi' ? '#7B2FBE' : Colors.primary}
              />
            </View>

            {/* Info */}
            <View style={styles.cardInfo}>
              <Text style={styles.cardLabel}>{method.label}</Text>
              <Text style={styles.cardNumber}>•••• •••• •••• {method.last4}</Text>
              {method.expiry && (
                <Text style={styles.cardExpiry}>Vence {method.expiry}</Text>
              )}
            </View>

            {/* Estado */}
            <View style={styles.cardStatus}>
              {method.isDefault && (
                <View style={styles.defaultBadge}>
                  <Text style={styles.defaultBadgeText}>PRINCIPAL</Text>
                </View>
              )}
              {/* Radio button visual */}
              <View style={[
                styles.radio,
                selectedMethod === method.id && styles.radioSelected
              ]}>
                {selectedMethod === method.id && <View style={styles.radioDot} />}
              </View>
            </View>
          </TouchableOpacity>
        ))}

<<<<<<< HEAD
        {/* Botón agregar tarjeta */}
        <TouchableOpacity
          style={styles.addCardButton}
          activeOpacity={0.8}
          onPress={() => setShowAddCardModal(true)}
        >
=======
<<<<<<< HEAD
        {/* Botón agregar tarjeta */}
        <TouchableOpacity style={styles.addCardButton} activeOpacity={0.8}>
=======
<<<<<<< HEAD
        {/* Botón agregar tarjeta */}
        <TouchableOpacity style={styles.addCardButton} activeOpacity={0.8}>
=======
        {/* Botón agregar tarjeta - AHORA ABRE MODAL */}
        <TouchableOpacity
          style={styles.addCardButton}
          activeOpacity={0.8}
          onPress={() => setModalVisible(true)}
        >
>>>>>>> 18abcdc6fd3da31a4305ea9ef59c40c68909243c
>>>>>>> origin/master
>>>>>>> e8da3abcd0480b37f872a7006ab961f2b4bce4f7
          <View style={styles.addCardIcon}>
            <MaterialIcons name="add" size={22} color={Colors.primary} />
          </View>
          <Text style={styles.addCardText}>Agregar nuevo método de pago</Text>
          <MaterialIcons name="arrow-forward-ios" size={14} color={Colors.onSurfaceVariant} />
        </TouchableOpacity>

        {/* === HISTORIAL DE PAGOS === */}
<<<<<<< HEAD
        <Text style={styles.sectionTitle}>Historial de pagos (Toca para ver factura)</Text>

        {[
          { id: 'FPB-9831', date: '1 mayo, 2024', amount: '$189.00', status: 'Pagado', target: 'Visa •••• 4242' },
          { id: 'FPB-8712', date: '1 abril, 2024', amount: '$189.00', status: 'Pagado', target: 'Visa •••• 4242' },
          { id: 'FPB-7649', date: '1 marzo, 2024', amount: '$189.00', status: 'Pagado', target: 'Mastercard •••• 8821' },
        ].map((payment, i) => (
          <TouchableOpacity
            key={i}
            style={styles.paymentHistory}
            activeOpacity={0.7}
            onPress={() => {
              setSelectedBill(payment);
              setShowBillModal(true);
            }}
          >
=======
        <Text style={styles.sectionTitle}>Historial de pagos</Text>

        {[
          { date: '1 mayo, 2024', amount: '$189.00', status: 'Pagado' },
          { date: '1 abril, 2024', amount: '$189.00', status: 'Pagado' },
          { date: '1 marzo, 2024', amount: '$189.00', status: 'Pagado' },
        ].map((payment, i) => (
          <View key={i} style={styles.paymentHistory}>
>>>>>>> e8da3abcd0480b37f872a7006ab961f2b4bce4f7
            <View>
              <Text style={styles.paymentHistoryDate}>{payment.date}</Text>
              <Text style={styles.paymentHistoryDesc}>Suscripción mensual</Text>
            </View>
            <View style={styles.paymentHistoryRight}>
              <Text style={styles.paymentHistoryAmount}>{payment.amount}</Text>
              <View style={styles.paidBadge}>
                <Text style={styles.paidBadgeText}>{payment.status.toUpperCase()}</Text>
              </View>
            </View>
<<<<<<< HEAD
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* MODAL DE AGREGAR NUEVO MÉTODO DE PAGO */}
      <Modal
        visible={showAddCardModal}
        transparent
        animationType="slide"
        onRequestClose={() => setShowAddCardModal(false)}
      >
        <TouchableWithoutFeedback onPress={() => setShowAddCardModal(false)}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.modalCard}>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalTitle}>Nueva Tarjeta</Text>
                  <TouchableOpacity onPress={() => setShowAddCardModal(false)}>
                    <MaterialIcons name="close" size={24} color={Colors.onBackground} />
                  </TouchableOpacity>
                </View>

                {/* Formulario */}
                <ScrollView showsVerticalScrollIndicator={false}>
                  <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>NOMBRE DEL TITULAR</Text>
                    <TextInput
                      style={styles.formInput}
                      placeholder="Juan Pérez"
                      value={cardName}
                      onChangeText={setCardName}
                    />
                  </View>

                  <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>NÚMERO DE TARJETA</Text>
                    <TextInput
                      style={styles.formInput}
                      placeholder="4242 4242 4242 4242"
                      keyboardType="numeric"
                      maxLength={19}
                      value={cardNumber}
                      onChangeText={setCardNumber}
                    />
                  </View>

                  <View style={styles.formRow}>
                    <View style={[styles.formGroup, { flex: 1.2 }]}>
                      <Text style={styles.formLabel}>EXPIRACIÓN</Text>
                      <TextInput
                        style={styles.formInput}
                        placeholder="MM/AA"
                        keyboardType="numeric"
                        maxLength={5}
                        value={cardExpiry}
                        onChangeText={setCardExpiry}
                      />
                    </View>
                    <View style={[styles.formGroup, { flex: 0.8 }]}>
                      <Text style={styles.formLabel}>CVC / CVV</Text>
                      <TextInput
                        style={styles.formInput}
                        placeholder="123"
                        keyboardType="numeric"
                        maxLength={4}
                        secureTextEntry
                        value={cardCvv}
                        onChangeText={setCardCvv}
                      />
                    </View>
                  </View>

                  <TouchableOpacity
                    style={styles.saveCardButton}
                    onPress={handleSaveCard}
                    activeOpacity={0.8}
                  >
                    <Text style={styles.saveCardButtonText}>Guardar Método de Pago</Text>
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {/* MODAL DE RECIBO DE SUSCRIPCIÓN */}
      {selectedBill && (
        <InfoModal
          visible={showBillModal}
          title="Factura de Suscripción"
          message={`Factura de Cobro Mensual:\n\nID Factura: ${selectedBill.id}\nFecha de Emisión: ${selectedBill.date}\nDetalle: Suscripción Mensual FoodPass Premium\nMonto Cobrado: ${selectedBill.amount}\nMétodo: ${selectedBill.target}\n\nEstado: PAGADO Y CONCILIADO`}
          icon="receipt"
          iconColor={Colors.primary}
          onClose={() => setShowBillModal(false)}
        />
      )}
=======
          </View>
        ))}
      </ScrollView>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

      {/* ===== MODAL PARA AGREGAR MÉTODO DE PAGO ===== */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Agregar método de pago</Text>

            {newPaymentOptions.map((option) => (
              <TouchableOpacity
                key={option.id}
                style={styles.modalOption}
                onPress={() => handleAddPaymentMethod(option.id)}
                activeOpacity={0.7}
              >
                <View style={styles.modalOptionIcon}>
                  <MaterialIcons name={option.icon as any} size={24} color={Colors.primary} />
                </View>
                <Text style={styles.modalOptionText}>{option.label}</Text>
                <MaterialIcons name="chevron-right" size={20} color={Colors.onSurfaceVariant} />
              </TouchableOpacity>
            ))}

            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalCloseButtonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
>>>>>>> 18abcdc6fd3da31a4305ea9ef59c40c68909243c
>>>>>>> origin/master
>>>>>>> e8da3abcd0480b37f872a7006ab961f2b4bce4f7
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.surface,
  },
  scroll: { flex: 1 },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 24,
  },
  // RESUMEN DEL PLAN
  planSummary: {
    backgroundColor: Colors.inverseSurface,
    borderRadius: BorderRadius.xxl,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  planSummaryLeft: { flex: 1 },
  planBadge: {
    backgroundColor: Colors.primaryContainer,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: BorderRadius.full,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  planBadgeText: {
    fontSize: 9,
    fontWeight: '700',
    color: Colors.onPrimaryContainer,
    letterSpacing: 1,
  },
  planName: {
    fontSize: 17,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 2,
  },
  planSubtitle: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.6)',
  },
  planPrice: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 2,
  },
  planPriceAmount: {
    fontSize: 32,
    fontWeight: '800',
    color: Colors.primaryContainer,
    letterSpacing: -1,
  },
  planPricePer: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.5)',
  },
  nextBilling: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: Colors.tertiaryContainer + '20',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: BorderRadius.lg,
    marginBottom: 24,
  },
  nextBillingText: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.tertiary,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.onBackground,
    marginBottom: 12,
  },
  // TARJETAS DE PAGO
  paymentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surfaceContainerLowest,
    borderRadius: BorderRadius.xxl,
    padding: 16,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  paymentCardSelected: {
    borderColor: Colors.primaryContainer,
    backgroundColor: Colors.surfaceContainerLowest,
  },
  cardIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: Colors.surfaceContainerLow,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  cardIconNequi: {
    backgroundColor: '#F3E6FF',
  },
  cardInfo: { flex: 1 },
  cardLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.onSurface,
    marginBottom: 2,
  },
  cardNumber: {
    fontSize: 13,
    color: Colors.onSurfaceVariant,
    letterSpacing: 1,
    marginBottom: 2,
  },
  cardExpiry: {
    fontSize: 11,
    color: Colors.onSurfaceVariant,
  },
  cardStatus: {
    alignItems: 'flex-end',
    gap: 8,
  },
  defaultBadge: {
    backgroundColor: Colors.tertiaryContainer,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: BorderRadius.full,
  },
  defaultBadgeText: {
    fontSize: 8,
    fontWeight: '700',
    color: Colors.onTertiaryContainer,
    letterSpacing: 1,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.outlineVariant,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioSelected: {
    borderColor: Colors.primaryContainer,
  },
  radioDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.primaryContainer,
  },
  // AGREGAR TARJETA
  addCardButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    backgroundColor: Colors.surfaceContainerLow,
    borderRadius: BorderRadius.xxl,
    padding: 16,
    marginBottom: 24,
  },
  addCardIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: Colors.outlineVariant,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addCardText: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    color: Colors.onSurface,
  },
  // HISTORIAL DE PAGOS
  paymentHistory: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
  },
  paymentHistoryDate: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.onSurface,
    marginBottom: 2,
  },
  paymentHistoryDesc: {
    fontSize: 12,
    color: Colors.onSurfaceVariant,
  },
  paymentHistoryRight: {
    alignItems: 'flex-end',
    gap: 4,
  },
  paymentHistoryAmount: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.onSurface,
  },
  paidBadge: {
    backgroundColor: Colors.tertiaryContainer,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: BorderRadius.full,
  },
  paidBadgeText: {
    fontSize: 9,
    fontWeight: '700',
    color: Colors.onTertiaryContainer,
    letterSpacing: 1,
  },
<<<<<<< HEAD
  toastContainer: {
    position: 'absolute',
    top: 80,
    left: 20,
    right: 20,
    backgroundColor: Colors.tertiary,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: BorderRadius.xl,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    zIndex: 999,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  toastText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(18, 31, 5, 0.4)',
    justifyContent: 'flex-end',
  },
  modalCard: {
    backgroundColor: Colors.surfaceContainerLowest,
    borderTopLeftRadius: BorderRadius.xxxl,
    borderTopRightRadius: BorderRadius.xxxl,
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 34,
    maxHeight: '80%',
    shadowColor: '#121f05',
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    ...Typography.titleLg,
    color: Colors.onBackground,
  },
  formGroup: {
    marginBottom: 16,
  },
  formLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: Colors.onSurface,
    letterSpacing: 1.5,
    marginBottom: 6,
    marginLeft: 4,
  },
  formInput: {
    backgroundColor: Colors.surfaceContainer,
    borderRadius: BorderRadius.xl,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
    color: Colors.onSurface,
  },
  formRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  saveCardButton: {
    backgroundColor: Colors.primaryContainer,
    paddingVertical: 14,
    borderRadius: BorderRadius.xl,
    alignItems: 'center',
    marginTop: 16,
  },
  saveCardButtonText: {
    color: Colors.onPrimaryContainer,
    fontSize: 14,
    fontWeight: '700',
  },
});
=======
<<<<<<< HEAD
});
=======
<<<<<<< HEAD
});
=======
  // ===== ESTILOS DEL MODAL =====
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end', // Aparece desde abajo (como action sheet)
  },
  modalContent: {
    backgroundColor: Colors.surface,
    borderTopLeftRadius: BorderRadius.xxl,
    borderTopRightRadius: BorderRadius.xxl,
    padding: 24,
    paddingBottom: 40,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.onSurface,
    textAlign: 'center',
    marginBottom: 20,
  },
  modalOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.surfaceContainerLow,
  },
  modalOptionIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: Colors.surfaceContainerLow,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  modalOptionText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: Colors.onSurface,
  },
  modalCloseButton: {
    marginTop: 20,
    paddingVertical: 14,
    borderRadius: BorderRadius.lg,
    backgroundColor: Colors.surfaceContainerLow,
    alignItems: 'center',
  },
  modalCloseButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.onSurfaceVariant,
  },
});
>>>>>>> 18abcdc6fd3da31a4305ea9ef59c40c68909243c
>>>>>>> origin/master
>>>>>>> e8da3abcd0480b37f872a7006ab961f2b4bce4f7
